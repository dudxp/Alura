using FilmesAPI.Data;
using FilmesAPI.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(opt => 
{
    opt.UseLazyLoadingProxies()
       .UseMySQL(builder.Configuration.GetConnectionString("FilmeConnection"));
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddScoped<FilmeService, FilmeService>();
builder.Services.AddScoped<CinemaService, CinemaService>();
builder.Services.AddScoped<EnderecoService, EnderecoService>();
builder.Services.AddScoped<GerenteService, GerenteService>();
builder.Services.AddScoped<SessaoService, SessaoService>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddSwaggerGen(c => c
                    .SwaggerDoc("v1", new OpenApiInfo { Title = "Filmes API", Version = "v1" }));

var app = builder.Build();

if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage()
       .UseSwagger()
       .UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Filmes API"));
}

app.UseHttpsRedirection()
   .UseRouting()
   .UseAuthorization()
   .UseEndpoints(endpoints => endpoints.MapControllers());

app.Run();
