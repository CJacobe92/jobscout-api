using System.Reflection;
using Asp.Versioning.ApiExplorer;
using JobScoutApi.Configurations;
using JobScoutApi.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);

builder.Services.AddControllers();

// ✅ Register API Versioning
builder.Services.AddApiVersioning(options =>
{
    options.ReportApiVersions = true;
})
.AddApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});

// ✅ Register Swagger & Dynamic Versioning
builder.Services.AddSwaggerGen(options =>
{
    options.IncludeXmlComments(xmlPath); // ✅ XML documentation handled in Program.cs
});
builder.Services.ConfigureOptions<ConfigureSwaggerGenOptions>();

// ✅ DB Connection
var connectionString = builder.Configuration.GetConnectionString("Development") ??
    throw new InvalidOperationException("Connection string 'Development' not found.");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

// ✅ Configure Middleware
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

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
