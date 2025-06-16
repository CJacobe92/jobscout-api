using Asp.Versioning.ApiExplorer;
using JobScoutApi.Configurations;
using JobScoutApi.Data;
using JobScoutApi.Models.Entities;
using Microsoft.AspNetCore.Identity;

namespace JobScoutApi
{
    class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();

            // ✅ Register Services in Logical Dependency Order
            DatabaseConfig.ConfigureDatabase(builder.Services, builder.Configuration);
            IdentityConfig.ConfigureIdentity(builder.Services);
            JwtConfig.ConfigureJwtAuthentication(builder.Services);
            SwaggerConfig.ConfigureSwagger(builder.Services);

            var app = builder.Build();

            // ✅ Middlewares
            SwaggerConfig.ConfigureSwaggerUI(app);

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();
            app.Run();

        }
    }

}


