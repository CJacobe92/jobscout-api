using JobScoutApi.Data;
using Microsoft.EntityFrameworkCore;

namespace JobScoutApi.Configurations
{
  public static class DatabaseConfig
  {
    public static void ConfigureDatabase(IServiceCollection services, IConfiguration configuration)
    {
      var connectionString = configuration.GetConnectionString("Development") ??
                throw new InvalidOperationException("Connection string 'Development' not found.");
      services.AddDbContext<ApplicationDbContext>(options =>
                options.UseNpgsql(connectionString));
    }
  }
}