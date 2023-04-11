using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicUniverseAPI.Data;
using MusicUniverseAPI.Models;
using MusicUniverseAPI.Models.DTOs;
using System.Net;

namespace MusicUniverseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly ShopDbContext _context;
        private User _activeUser;

        public UsersController(ShopDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("{id:Guid}")]
        [ActionName("GetUserById")]
        public async Task<IActionResult> GetUserById([FromRoute] Guid id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        [ActionName("Register")]
        public async Task<IActionResult> Register([FromBody] UserDto data)
        {
            User user = new User();
            user.Id = Guid.NewGuid();
            user.Email = data.Email;
            user.Password = data.Password;
            user.Name = data.Name;
            user.Role = "Customer";
            user.Cart = new Cart();
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUserById), new { id = user.Id }, user);
        }

        [HttpGet("{email}/{password}")]
        public async Task<IActionResult> Login([FromRoute] string email, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email && x.Password == password);
            if(user == null)
            {
                return NotFound();
            }

            _activeUser = user;

            return Ok(user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, User user)
        {
            if(id == user.Id)
            {
                return BadRequest();
            }

            var existingUser = await _context.Users.FirstOrDefaultAsync(x => x.Id == user.Id);

            if(existingUser == null)
            {
                return NotFound();
            }

            existingUser.Id = user.Id;
            existingUser.Email = user.Email;
            existingUser.Password = user.Password;
            existingUser.Role = user.Role;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
