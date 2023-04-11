using Microsoft.AspNetCore.Mvc;
using MusicUniverseAPI.Data;
using MusicUniverseAPI.Models;

namespace MusicUniverseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ShopDbContext _context;

        public ProductsController(ShopDbContext context)
        {
            _context = context;
        }
    }
}
