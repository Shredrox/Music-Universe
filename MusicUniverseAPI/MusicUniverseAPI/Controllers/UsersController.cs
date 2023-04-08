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
        private readonly UserDbContext _userDbContext;
        private int LatestID;

        public UsersController(UserDbContext context)
        {
            _userDbContext = context;
            LatestID = 0;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await _userDbContext.Users.ToListAsync());
        }

        [HttpGet]
        [Route("{id:int}")]
        [ActionName("GetUserById")]
        public async Task<IActionResult> GetUserById([FromRoute] int id)
        {
            var user = await _userDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser(User user)
        {
            user.Id = LatestID++;
            await _userDbContext.Users.AddAsync(user);
            await _userDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUserById), new { id = user.Id }, user);
        }
    }
}
