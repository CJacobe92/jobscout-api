using System.ComponentModel.DataAnnotations;

namespace JobScoutApi.Shared.DTOs
{
  public record CreateUserDto
  {

    [Required]
    [MinLength(3, ErrorMessage = "First name  cannot be less than 3 characters in length")]
    [MaxLength(20, ErrorMessage = "First name cannot be more than 20 characters in length")]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    [MinLength(3, ErrorMessage = "Last name  cannot be less than 3 characters in length")]
    [MaxLength(20, ErrorMessage = "Last name cannot be more than 20 characters in length")]
    public string LastName { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters long.")]
    [MaxLength(64, ErrorMessage = "Password cannot be longer than 64 characters.")]
    public required string Password { get; set; } = string.Empty;
  }
}