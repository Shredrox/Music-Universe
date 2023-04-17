using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MusicUniverseAPI.Data;
using MusicUniverseAPI.Models;
using MusicUniverseAPI.Models.DTOs;
using System.Security.Claims;

namespace MusicUniverseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly ShopDbContext _context;
        private static User _activeUser = new User();

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

        [HttpPost("Register")]
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

            return Ok(user);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginDto data)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == data.Email && x.Password == data.Password);
            if(user == null)
            {
                return NotFound();
            }

            _activeUser = user;

            return Ok(user);
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, user.Name)
            };

            

            return string.Empty;
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
