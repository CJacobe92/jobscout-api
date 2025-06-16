using System.ComponentModel.DataAnnotations;

namespace JobScoutApi.Shared.DTOs
{
  public record LoginRequestDto
  {
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;
  }
}