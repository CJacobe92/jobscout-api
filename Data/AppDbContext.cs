using JobScoutApi.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace JobScoutApi.Data
{
  public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
  {

    public DbSet<User> Users { get; set; }
    public DbSet<Client> Clients { get; set; }

    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    // {
    //   if (!optionsBuilder.IsConfigured)
    //   {
    //     optionsBuilder.UseNpgsql("Server=localhost;Port=5432;Username=postgres;Password=dbadmin;Database=jobscout_db_dev;TrustServerCertificate=true");
    //   }
    // }
  }
}