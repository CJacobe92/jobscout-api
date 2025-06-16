using Microsoft.AspNetCore.Identity;

namespace JobScoutApi.Shared.DTOs
{
  public record UserDto
  {
    public required string Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public required string Email { get; set; }
    public required string UserName { get; set; }
    public string LastName { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
  }
}