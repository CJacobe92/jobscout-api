using Asp.Versioning;
using JobScoutApi.Data;
using JobScoutApi.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobScoutApi.Controllers.v1
{
  [ApiVersion("1.0")]
  [Route("api/v{version:apiVersion}/[controller]")]
  [ApiController]
  [ApiExplorerSettings(GroupName = "v1")]
  public class UsersController(AppDbContext dbContext) : ControllerBase
  {
    private readonly AppDbContext dbContext = dbContext;

    /// <summary>
    /// Retrieves all users.
    /// </summary>
    /// <returns>List of users.</returns>
    [HttpGet]
    [ProducesResponseType(typeof(List<User>), 200)]
    public async Task<ActionResult> GetAllUsers()
    {
      var users = await dbContext.Users.ToListAsync();
      return Ok(users);
    }
  }
}