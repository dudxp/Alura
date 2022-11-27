using AutoMapper;
using FilmesAPI.Data;
using FilmesAPI.Data.Dtos;
using FilmesAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FilmesAPI.Services
{
    public class GerenteService
    {
        private AppDbContext _context;
        private IMapper _mapper;

        public GerenteService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Gerente AdicionaGerente(CreateGerenteDto gerenteDto)
        {
            Gerente gerente = _mapper.Map<Gerente>(gerenteDto);
            _context.Gerentes.Add(gerente);
            _context.SaveChanges();
            return gerente;
        }

        public List<ReadGerenteDto> RecuperaGerentes(string nome)
        {
            List<Gerente> gerentes;
            if (string.IsNullOrEmpty(nome))
            {
                gerentes = _context.Gerentes.ToList();
            }
            else
            {
                gerentes = _context.Gerentes
                           .Where(gerente => gerente.Nome == nome).ToList();
            }

            if (gerentes == null) return null;
            else
            {
                List<ReadGerenteDto> readDto =
                    _mapper.Map<List<ReadGerenteDto>>(gerentes);
                return readDto;
            }
        }

        public ReadGerenteDto RecuperaGerentesPorId(int id)
        {
            Gerente gerente = _context.Gerentes.FirstOrDefault(Gerente => Gerente.Id == id);
            if (gerente != null)
            {
                ReadGerenteDto gerenteDto = _mapper.Map<ReadGerenteDto>(gerente);
                return gerenteDto;
            }
            return null;
        }

        internal Gerente DeletaGerente(int id)
        {
            Gerente gerente = _context.Gerentes.FirstOrDefault(gerente => gerente.Id == id);
            if (gerente == null)
            {
                return null;
            }
            _context.Remove(gerente);
            _context.SaveChanges();
            return gerente;
        }
    }
}
