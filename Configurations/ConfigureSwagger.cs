using System.Reflection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using Asp.Versioning.ApiExplorer;

namespace JobScoutApi.Configurations
{
  public class SwaggerConfig(IApiVersionDescriptionProvider provider) : IConfigureOptions<SwaggerGenOptions>
  {
    private readonly IApiVersionDescriptionProvider _provider = provider;

    public void Configure(SwaggerGenOptions options)
    {
      // ✅ Include XML Comments for API Documentation
      var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
      var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
      options.IncludeXmlComments(xmlPath);

      // ✅ Add Security Definition for JWT Authentication
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

    public static void ConfigureSwagger(IServiceCollection services)
    {
      services.ConfigureOptions<SwaggerConfig>();

      // ✅ Register API Versioning Inside SwaggerConfig
      services.AddApiVersioning(options =>
      {
        options.ReportApiVersions = true;
      })
      .AddApiExplorer(options =>
      {
        options.GroupNameFormat = "'v'VVV";
        options.SubstituteApiVersionInUrl = true;
      });

      services.AddSwaggerGen();
    }

    public static void ConfigureSwaggerUI(WebApplication app)
    {
      if (app.Environment.IsDevelopment())
      {
        app.UseSwagger();
        app.UseSwaggerUI(options =>
        {
          var provider = app.Services.GetRequiredService<IApiVersionDescriptionProvider>();

          foreach (var description in provider.ApiVersionDescriptions)
          {
            options.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json", $"API {description.ApiVersion}");
          }
        });
      }
    }
  }
}
