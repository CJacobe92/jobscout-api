using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using JobScoutApi.Models.Entities;

namespace JobScoutApi.Data
{
  public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
      : IdentityDbContext<User>(options)
  {
    public DbSet<Client> Clients { get; set; }
  }
}
