using AutoMapper;
using FilmesAPI.Data;
using FilmesAPI.Data.Dtos;
using FilmesAPI.Models;
using FilmesAPI.Services;
using FluentResults;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FilmesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GerenteController : ControllerBase
    {
        private GerenteService _gerenteService;
        public GerenteController (GerenteService gerenteService)
        {
            _gerenteService = gerenteService;
        }

        [HttpPost]
        public IActionResult AdicionaGerente([FromBody] CreateGerenteDto gerenteDto)
        {
            Gerente gerente = _gerenteService.AdicionaGerente(gerenteDto);
            return CreatedAtAction(nameof(RecuperaGerentesPorId), new { Id = gerente.Id }, gerente);
        }

        [HttpGet]
        public IActionResult RecuperaGerentes([FromBody] string nome)
        {
            List<ReadGerenteDto> gerentes = _gerenteService.RecuperaGerentes(nome);
            if (gerentes == null) return NotFound();
            return Ok(gerentes);
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaGerentesPorId(int id)
        {
            ReadGerenteDto gerente = _gerenteService.RecuperaGerentesPorId(id);
            if (gerente == null) return NotFound();
            return Ok(gerente);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletaGerente(int id)
        {
            Result resultado = _gerenteService.DeletaGerente(id);
            if (resultado.IsFailed) return NotFound();    
            return NoContent();
            
        }
    }
}
