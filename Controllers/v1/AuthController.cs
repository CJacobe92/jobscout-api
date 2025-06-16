using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Asp.Versioning;
using JobScoutApi.Models.Entities;
using JobScoutApi.Shared.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace JobScoutApi.Controllers.v1
{

  [ApiVersion("1.0")]
  [Route("api/v{version:apiVersion}/[controller]")]
  [ApiController]
  [ApiExplorerSettings(GroupName = "v1")]

  public class AuthController(UserManager<User> userManager) : ControllerBase
  {
    private readonly UserManager<User> _userManager = userManager;

    [HttpPost("login")]
    [ProducesResponseType(typeof(string), 200)]
    public async Task<IActionResult> Login([FromBody] LoginRequestDto model)
    {
      var user = await _userManager.FindByEmailAsync(model.Email);

      if (user == null || !await _userManager.CheckPasswordAsync(user, model.Password))
      {
        return Unauthorized("Invalid credentials");
      }
      var newAccessToken = GenerateJwtToken(user);
      var newRefreshToken = GenerateRefreshToken();
      user.RefreshToken = newRefreshToken;
      user.RefreshTokenExpiry = DateTime.UtcNow.AddSeconds(30);
      await _userManager.UpdateAsync(user);

      var cookieOptions = new CookieOptions
      {
        HttpOnly = true,
        Secure = false,
        SameSite = SameSiteMode.Lax,
        Expires = user.RefreshTokenExpiry
      };

      Response.Cookies.Append("refreshToken", newRefreshToken, cookieOptions);

      return Ok(new { Token = newAccessToken });
    }

    [HttpPost("refresh")]
    public async Task<IActionResult> Refresh()
    {
      var refreshToken = Request.Cookies["refreshToken"];

      // ✅ Returns error if no refresh token is found in the request (likely removed by the browser upon expiration)
      if (string.IsNullOrEmpty(refreshToken))
      {
        return Unauthorized("Refresh token expired. Please log in again.");
      }

      var user = await _userManager.Users.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);

      // ✅ Returns error if the provided refresh token does not match the one stored in the database
      if (user == null)
      {
        return Unauthorized("Invalid refresh token. Please log in again.");
      }

      /*
      * ✅ Returns error if the refresh token has expired.
      * This can happen if a user signs in on another device/browser, which invalidates the existing refresh token.
      */
      if (user.RefreshTokenExpiry == null || user.RefreshTokenExpiry <= DateTime.UtcNow)
      {
        return Unauthorized("Refresh token expired. Please log in again.");
      }

      var newAccessToken = GenerateJwtToken(user);
      var newRefreshToken = GenerateRefreshToken(); // 🔹 Always rotate the refresh token for security

      // ✅ Update the refresh token in the database to maintain security
      user.RefreshToken = newRefreshToken;
      await _userManager.UpdateAsync(user);

      var cookieOptions = new CookieOptions
      {
        HttpOnly = true,
        Secure = false,
        SameSite = SameSiteMode.Lax,
        Expires = user.RefreshTokenExpiry // 🔹 Keep expiration consistent with stored refresh token expiry
      };

      Response.Cookies.Append("refreshToken", newRefreshToken, cookieOptions);

      return Ok(new { Token = newAccessToken });
    }

    private static string GenerateJwtToken(User user)
    {
      var tokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.ASCII.GetBytes("q9v3G1BpKsyJqLzTd8FHY+zY6WkQT5aAbdxZ3VJcfJ4=");

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity([new Claim(ClaimTypes.NameIdentifier, user.Id)]),
        Expires = DateTime.UtcNow.AddHours(1),
        Issuer = "jobscout-api",
        Audience = "jobscout-api-clients",
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
      };

      var token = tokenHandler.CreateToken(tokenDescriptor);
      return tokenHandler.WriteToken(token);
    }

    private static string GenerateRefreshToken()
    {
      var randomBytes = new byte[32];
      using var rng = RandomNumberGenerator.Create();
      rng.GetBytes(randomBytes);
      return Convert.ToBase64String(randomBytes);
    }

  }
}