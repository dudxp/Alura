using AutoMapper;
using Castle.Core.Internal;
using FilmesAPI.Data;
using FilmesAPI.Data.Dtos;
using FilmesAPI.Models;
using FilmesAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace FilmesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnderecoController : ControllerBase
    {
        private EnderecoService _enderecoService;
        public EnderecoController(AppDbContext context, IMapper mapper)
        {
            _enderecoService = new EnderecoService(context, mapper);
        }

        [HttpPost]
        public IActionResult AdicionaEndereco([FromBody] CreateEnderecoDto enderecoDto)
        {
            Endereco endereco = _enderecoService.AdicionaEndereco(enderecoDto);
            return CreatedAtAction(nameof(RecuperaEnderecosPorId), new { Id = endereco.Id }, endereco);
        }

        [HttpGet]
        public IActionResult RecuperaEnderecos([FromQuery] string nomeDoEndereco)
        {
            List<ReadEnderecoDto> readEnderecoDtos = _enderecoService.RecuperaEnderecos(nomeDoEndereco);
            if (readEnderecoDtos == null) NotFound(); 
            return Ok(readEnderecoDtos);
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaEnderecosPorId(int id)
        {
            ReadEnderecoDto enderecoDto = _enderecoService.RecuperaEnderecosPorId(id);
            if (enderecoDto == null) return NotFound();
            return Ok(enderecoDto);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizaEndereco(int id, [FromBody] UpdateEnderecoDto EnderecoDto)
        {
            Endereco Endereco = _enderecoService.AtualizaEndereco(id, EnderecoDto);
            if (Endereco == null) return NotFound();
            return NoContent();
        }


        [HttpDelete("{id}")]
        public IActionResult DeletaEndereco(int id)
        {
            Endereco endereco = _enderecoService.DeletaEndereco(id);
            if (endereco == null) return NotFound();
            return NoContent();
        }
    }
}
