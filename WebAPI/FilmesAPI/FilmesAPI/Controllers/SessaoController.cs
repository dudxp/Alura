using AutoMapper;
using FilmesAPI.Data.Dtos;
using FilmesAPI.Data;
using FilmesAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using FilmesAPI.Data.Dtos.Sessao;

namespace FilmesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SessaoController : ControllerBase
    {
        private AppDbContext _context;
        private IMapper _mapper;

        public SessaoController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult AdicionaSessao([FromBody] CreateSessaoDto sessaoDto)
        {
            Sessao sessao = _mapper.Map<Sessao>(sessaoDto);
            _context.Sessoes.Add(sessao);
            _context.SaveChanges();
            return CreatedAtAction(nameof(RecuperaSessaoPorId), new { Id = sessao.Id }, sessao);
        }

        [HttpGet]
        public IEnumerable<Sessao> RecuperaSessoes([FromQuery] string placeholder)
        {
            return _context.Sessoes;
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaSessaoPorId(int id)
        {
            Sessao Sessao = _context.Sessoes.FirstOrDefault(Sessao => Sessao.Id == id);
            if (Sessao != null)
            {
                ReadSessaoDto SessaoDto = _mapper.Map<ReadSessaoDto>(Sessao);
                return Ok(SessaoDto);
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletaSessao(int id)
        {
            Sessao Sessao = _context.Sessoes.FirstOrDefault(Sessao => Sessao.Id == id);
            if (Sessao == null)
            {
                return NotFound();
            }
            _context.Remove(Sessao);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
