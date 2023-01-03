using Microsoft.AspNetCore.Mvc;
using UsuariosApi.Data.Dtos;

namespace UsuariosApi.Controllers
{
    [Route("controller")]
    [ApiController]
    public class CadastroController : ControllerBase
    {
        [HttpPost]
        public IActionResult CadastrarUsuario(CreateUsuarioDto createUsuarioDto) 
        {
            return Ok();
        }
    }
}
