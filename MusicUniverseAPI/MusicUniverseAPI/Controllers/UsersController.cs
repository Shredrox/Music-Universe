using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicUniverseAPI.Data;
using MusicUniverseAPI.Models;

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

        [HttpGet]
        [Route("{id:Guid}")]
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
        public async Task<IActionResult> Register(string name, string email, string password)
        {
            User user = new User();
            user.Id = Guid.NewGuid();
            user.Email = email;
            user.Password = password;
            user.Name = name;
            user.Role = "Customer";
            user.Cart = new Cart();
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUserById), new { id = user.Id }, user);
        }

        [HttpGet]
        [Route("{email}/{password}")]
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
    }
}
