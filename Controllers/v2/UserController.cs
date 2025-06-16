using Asp.Versioning;
using JobScoutApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobScoutApi.Controllers.v2
{
  [ApiVersion("2.0")]
  [Route("api/v{version:apiVersion}/[controller]")]
  [ApiController]
  [ApiExplorerSettings(GroupName = "v2")]
  public class UsersController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;

    [HttpGet]
    public async Task<ActionResult> GetAllUsers()
    {
      var users = await dbContext.Users.ToListAsync();
      return Ok(users);
    }
  }
}