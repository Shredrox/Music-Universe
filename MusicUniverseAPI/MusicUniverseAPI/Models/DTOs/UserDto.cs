using System.ComponentModel.DataAnnotations;

namespace MusicUniverseAPI.Models.DTOs
{
    public class UserDto
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; } = "";
        [Required]
        public string Email { get; set; } = "";
        [Required]
        public string Password { get; set; } = "";
    }
}
