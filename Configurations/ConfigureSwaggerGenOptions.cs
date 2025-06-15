using Asp.Versioning.ApiExplorer;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace JobScoutApi.Configurations
{
  public class ConfigureSwaggerGenOptions(IApiVersionDescriptionProvider provider) : IConfigureOptions<SwaggerGenOptions>
  {
    private readonly IApiVersionDescriptionProvider _provider = provider;

    public void Configure(SwaggerGenOptions options)
    {
      // ✅ Add Security Definition Once (Before Loop)
      options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
      {
        Description = "Enter 'Bearer {token}'",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = "bearer"
      });

      foreach (var description in _provider.ApiVersionDescriptions)
      {
        options.SwaggerDoc(description.GroupName, new OpenApiInfo
        {
          Title = "JobScout API",
          Version = description.ApiVersion.ToString(),
          Description = description.IsDeprecated ? "This API version has been deprecated." : "Developed by Christian – Backend Developer specializing in API design.",
          Contact = new OpenApiContact
          {
            Name = "Christian Jacobe",
            Email = "support@jobscoutapi.com",
            Url = new Uri("https://jobscoutapi.com/contact")
          },
          License = new OpenApiLicense
          {
            Name = "MIT License",
            Url = new Uri("https://opensource.org/licenses/MIT")
          }
        });
      }
    }
  }
}
