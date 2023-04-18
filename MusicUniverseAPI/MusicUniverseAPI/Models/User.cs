using System.Text.Json.Serialization;

namespace MusicUniverseAPI.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public bool IsActive { get; set; }
        [JsonIgnore]
        public Cart Cart { get; set; }
    }
}
