using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace JobScoutApi.Models.Entities
{
  [Table("Users")]
  public class User : IdentityUser
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    // public override string Id { get; set; } = Guid.NewGuid().ToString();
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public string? RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiry { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
  }
}