using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using UsuariosApi.Data;
using UsuariosApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<UserDbContext>(o => o
            .UseMySQL(builder.Configuration.GetConnectionString("UsuarioConnection")));
builder.Services.AddIdentity<IdentityUser<int>, IdentityRole<int>>(opt => opt.SignIn.RequireConfirmedEmail = true)
                .AddEntityFrameworkStores<UserDbContext>()
                .AddDefaultTokenProviders();
builder.Services.AddScoped<CadastroService, CadastroService>();
builder.Services.AddScoped<LoginService, LoginService>();
builder.Services.AddScoped<TokenService, TokenService>();
builder.Services.AddScoped<LogoutService, LogoutService>();
builder.Services.AddScoped<EmailService, EmailService>();
builder.Services.AddControllers();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection()
   .UseRouting()
   .UseAuthorization()
   .UseEndpoints(endpoints => endpoints.MapControllers());

app.Run();

