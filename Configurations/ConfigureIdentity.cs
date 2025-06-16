using JobScoutApi.Data;
using JobScoutApi.Models.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace JobScoutApi.Configurations
{
  public static class IdentityConfig
  {
    public static void ConfigureIdentity(IServiceCollection services)
    {
      services.AddIdentity<User, IdentityRole>()
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders();

      services.Configure<IdentityOptions>(options =>
      {
        options.SignIn.RequireConfirmedEmail = false;
        options.User.RequireUniqueEmail = true;

        // ✅ Strengthen Password Requirements
        options.Password.RequireDigit = true;
        options.Password.RequireLowercase = true;
        options.Password.RequireUppercase = true;
        options.Password.RequireNonAlphanumeric = true;
        options.Password.RequiredLength = 8;
      });

      // ✅ Register Authorization for JWT Bearer and discard the Authorization Builder
      _ = services.AddAuthorization(options =>
        {
          options.DefaultPolicy = new AuthorizationPolicyBuilder()
              .RequireAuthenticatedUser()
              .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
              .Build();
        });
    }
  }
}