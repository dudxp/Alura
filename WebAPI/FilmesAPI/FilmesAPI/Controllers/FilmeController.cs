using AutoMapper;
using FilmesAPI.Data;
using FilmesAPI.Data.Dtos;
using FilmesAPI.Models;
using FilmesAPI.Profiles;
using FilmesAPI.Services;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FilmesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmeController : ControllerBase
    {
        private FilmeService _filmeService;

        public FilmeController(AppDbContext context, IMapper mapper)
        {
            _filmeService = new FilmeService(context,mapper);
        }

        [HttpPost]
        public IActionResult AdicionaFilme([FromBody] CreateFilmeDto filmeDto) 
        {
            Filme filme = _filmeService.AdicionaFilme(filmeDto);
            return CreatedAtAction(nameof(RecuperarFilmePorId), new { Id = filme.Id }, filme);
        }

        [HttpGet]
        public IActionResult RecuperarFilmes([FromQuery] int? classificacaoEtaria = null) 
        {
            List<ReadFilmeDto> readFilmeDto = _filmeService.RecuperarFilmes(classificacaoEtaria);
            if (readFilmeDto == null) return NotFound();
            return Ok(readFilmeDto);
        }

        [HttpGet("{id}")]
        public IActionResult RecuperarFilmePorId(int id)
        {
            ReadFilmeDto filmeDto = _filmeService.RecuperarFilmePorId(id);
            if (filmeDto == null) return NotFound();
            return Ok(filmeDto);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarFilme(int id, [FromBody] UpdateFilmeDto filmeDto) 
        {
            Filme filme = _filmeService.AtualizarFilme(id, filmeDto);
            if (filme == null) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarFilme(int id)
        {
            Filme filme = _filmeService.DeletarFilme(id);
            if (filme == null)
            {
                return NotFound();
            }

            return NoContent();
        }

    }
}


