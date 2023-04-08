using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using MusicUniverseAPI.Models;

namespace MusicUniverseAPI.Controllers
{
    public class RegistrationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        private readonly IConfiguration _configuration;

        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //[HttpPost]
        //[Route("registration")]
        //public string registration(User user)
        //{
        //    SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("UsersDbConnectionString").ToString());
        //    SqlCommand command = new SqlCommand("INSERT INTO Users(Username, Password, Email) VALUES('"+user.Name+ "','"+user.Password+"','"+user.Email+"' )", connection);
        //    int i = command.ExecuteNonQuery();
        //    if(i > 0)
        //    {
        //        return "Data Inserted";
        //    }
        //    else
        //    {
        //        return "Error";
        //    }
        //}
    }
}
