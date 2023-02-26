using AutoMapper;
using FluentResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using UsuariosApi.Data.Dtos;
using UsuariosApi.Data.Request;
using UsuariosApi.Models;

namespace UsuariosApi.Services
{
    public class CadastroService
    {
        public IMapper _mapper;
        private UserManager<IdentityUser<int>> _userManager;
        private EmailService _emailService;

        public CadastroService(IMapper mapper, UserManager<IdentityUser<int>> userManager, EmailService emailService)
        {
            _mapper = mapper;
            _userManager = userManager;
            _emailService = emailService;
        }

        public Result CadastraUsuario(CreateUsuarioDto createDto)
        {
            Usuario usuario = _mapper.Map<Usuario>(createDto);
            IdentityUser<int> usuarioIdentity = _mapper.Map<IdentityUser<int>>(usuario);
            Task<IdentityResult> resultadoIdentity = _userManager.CreateAsync(usuarioIdentity, createDto.Password);
            if (resultadoIdentity.Result.Succeeded)
            {
                var activationCode = _userManager
                    .GenerateEmailConfirmationTokenAsync(usuarioIdentity).Result;
                var encodedCode = HttpUtility.UrlEncode(activationCode);
                _emailService.EnviarEmail(
                    new [] { usuarioIdentity.Email },
                    "Link de ativacao",
                    usuarioIdentity.Id,
                    encodedCode);
                return Result.Ok().WithSuccess(activationCode);
            }
            return Result.Fail("Falha ao cadastrar usuário");
        }

        public Result AtivaContaUsuario(AtivaContaRequest request)
        {
            var identityUser = _userManager
                .Users
                .FirstOrDefault(u => u.Id == request.UsuarioId);

            var identityResult = _userManager
                .ConfirmEmailAsync(identityUser, request.CodigoAtivacao).Result;

            if (identityResult.Succeeded) 
            {
                return Result.Ok();
            }
            return Result.Fail("Falha ao ativar conta de usuario");
        }
    }
}
