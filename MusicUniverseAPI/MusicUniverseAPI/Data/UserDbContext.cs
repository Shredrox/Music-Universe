using Microsoft.EntityFrameworkCore;
using MusicUniverseAPI.Models;

namespace MusicUniverseAPI.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
