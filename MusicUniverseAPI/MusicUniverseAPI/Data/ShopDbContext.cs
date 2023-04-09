using Microsoft.EntityFrameworkCore;
using MusicUniverseAPI.Models;

namespace MusicUniverseAPI.Data
{
    public class ShopDbContext : DbContext
    {
        public ShopDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Cart> Carts { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<User>()
        //        .HasOne(u => u.Cart)
        //        .WithOne(c => c.User)
        //        .HasForeignKey<Cart>(c => c.UserId);

        //    modelBuilder.Entity<Cart>()
        //        .HasMany(c => c.CartProducts)
        //        .WithMany(p => p.Carts);

        //    modelBuilder.Entity<Cart>()
        //        .HasOne(c => c.User)
        //        .WithOne(u => u.Cart)
        //        .HasForeignKey<User>(u => u.CartId);
        //}
    }
}
