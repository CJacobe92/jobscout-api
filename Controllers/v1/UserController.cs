using Asp.Versioning;
using JobScoutApi.Shared.DTOs;
using JobScoutApi.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobScoutApi.Controllers.v1
{
  [ApiVersion("1.0")]
  [Route("api/v{version:apiVersion}/[controller]")]
  [ApiController]
  [ApiExplorerSettings(GroupName = "v1")]
  public class UsersController(UserManager<User> userManager) : ControllerBase
  {
    private readonly UserManager<User> _userManager = userManager;

    [Authorize]
    [HttpGet]
    [ProducesResponseType(typeof(List<UserDto>), 200)]
    public async Task<ActionResult> GetAllUsers()
    {
      var allUsers = await _userManager.Users.ToListAsync();

      var users = allUsers.Select(static user => new UserDto
      {
        Id = user.Id,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Email = user.Email ?? string.Empty,
        UserName = user.UserName ?? string.Empty,
        CreatedAt = user.CreatedAt,
        UpdatedAt = user.UpdatedAt
      }).ToList();

      return Ok(users);
    }

    [HttpPost]
    [ProducesResponseType(typeof(UserDto), 200)]
    public async Task<ActionResult> CreateUser(CreateUserDto createUserDto)
    {
      var newUser = new User
      {
        FirstName = createUserDto.FirstName,
        LastName = createUserDto.LastName,
        Email = createUserDto.Email,
        UserName = $"{createUserDto.FirstName}.{createUserDto.LastName}"
      };

      var result = await _userManager.CreateAsync(newUser, createUserDto.Password);
      if (!result.Succeeded)
      {
        return BadRequest(result.Errors);
      }

      var userDto = new UserDto
      {
        Id = newUser.Id,
        FirstName = newUser.FirstName,
        LastName = newUser.LastName,
        Email = newUser.Email,
        UserName = newUser.UserName,
        CreatedAt = newUser.CreatedAt,
        UpdatedAt = newUser.UpdatedAt,
      };

      return Ok(userDto);
    }
  }

}