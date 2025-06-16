using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace JobScoutApi.Configurations
{
  public static class JwtConfig
  {
    public static void ConfigureJwtAuthentication(IServiceCollection services)
    {
      services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
              options.Events = new JwtBearerEvents
              {
                OnAuthenticationFailed = context =>
                {
                  Console.WriteLine($"🔍 Authentication failed: {context.Exception.Message}");
                  return Task.CompletedTask;
                },
                OnChallenge = context =>
                {
                  Console.WriteLine($"⚠️ Challenge failure: {context.Error}, {context.ErrorDescription}");
                  return Task.CompletedTask;
                }
              };

              options.TokenValidationParameters = new TokenValidationParameters
              {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = "jobscout-api",
                ValidAudience = "jobscout-api-clients",
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("q9v3G1BpKsyJqLzTd8FHY+zY6WkQT5aAbdxZ3VJcfJ4="))
              };
            });
    }
  }
}