namespace MusicUniverseAPI.Models
{
    public class Cart
    {
        public Guid Id { get; set; }
        public User User { get; set; }   
        public Guid UserId { get; set; }
        public List<Product> CartProducts { get; set; }
    }
}
