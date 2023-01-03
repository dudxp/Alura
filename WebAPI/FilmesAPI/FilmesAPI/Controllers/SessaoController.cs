using AutoMapper;
using FilmesAPI.Data.Dtos;
using FilmesAPI.Data;
using FilmesAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using FilmesAPI.Data.Dtos.Sessao;
using FilmesAPI.Services;
using FluentResults;

namespace FilmesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SessaoController : ControllerBase
    {
        private SessaoService _sessaoService;
        
        public SessaoController (SessaoService sessaoService)
        {
            _sessaoService = sessaoService;
        }

        [HttpPost]
        public IActionResult AdicionaSessao([FromBody] CreateSessaoDto sessaoDto)
        {
            Sessao sessao = _sessaoService.AdicionaSessao(sessaoDto);
            return CreatedAtAction(nameof(RecuperaSessaoPorId), new { Id = sessao.Id }, sessao);
        }

        [HttpGet]
        public IActionResult RecuperaSessoes([FromQuery] string nomeCinema, [FromQuery] string nomeFilme)
        {
            List<ReadSessaoDto> sessoesDto = _sessaoService.RecuperaSessoes(nomeCinema, nomeFilme);

            if (sessoesDto == null) return NotFound();
            return Ok(sessoesDto);
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaSessaoPorId(int id)
        {
            ReadSessaoDto SessaoDto = _sessaoService.RecuperaSessaoPorId(id);
            if (SessaoDto == null) return NotFound();
            return Ok(SessaoDto);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletaSessao(int id)
        {
            Result resultado = _sessaoService.DeletaSessao(id);
            if (resultado.IsFailed) return NotFound();
            return NoContent();
        }
    }
}
