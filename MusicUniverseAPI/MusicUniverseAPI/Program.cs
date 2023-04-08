using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicUniverseAPI.Data;
using MusicUniverseAPI.Models;

namespace MusicUniverseAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<UserDbContext>(options => options.UseSqlServer(
                builder.Configuration.GetConnectionString("UsersDbConnectionString")));

            builder.Services.AddDbContext<ProductDbContext>(options => options.UseSqlServer(
                builder.Configuration.GetConnectionString("ProductsDbConnectionString")));

            var app = builder.Build();

            var options = new DbContextOptionsBuilder<UserDbContext>()
                .UseSqlServer(builder.Configuration.GetConnectionString("UsersDbConnectionString"))
                .Options;

            using (var context = new UserDbContext(options))
            {
                context.Database.EnsureCreated(); 
                AddAdmin(context); 
            }

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }

        public static void AddAdmin(UserDbContext context)
        {
            User admin = new User();
            admin.Id = Guid.NewGuid();
            admin.Name = "Meesho";
            admin.Role = "Admin";
            admin.Password = "AdminPassword";
            admin.Email = "AdminEmail@email";

            if (context.Users.FirstOrDefaultAsync(x => x.Id == admin.Id) != null)
            {
                return;
            }

            context.Users.Add(admin);
            context.SaveChanges();
        }
    }
}