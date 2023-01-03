using AutoMapper;
using FilmesAPI.Data;
using FilmesAPI.Data.Dtos.Sessao;
using FilmesAPI.Models;
using FluentResults;
using MySqlX.XDevAPI;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FilmesAPI.Services
{
    public class SessaoService
    {
        private AppDbContext _context;
        public IMapper _mapper;

        public SessaoService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Sessao AdicionaSessao(CreateSessaoDto sessaoDto)
        {
            Sessao sessao = _mapper.Map<Sessao>(sessaoDto);
            _context.Sessoes.Add(sessao);
            _context.SaveChanges();
            return sessao;
        }

        public ReadSessaoDto RecuperaSessaoPorId(int id)
        {
            Sessao Sessao = _context.Sessoes.FirstOrDefault(Sessao => Sessao.Id == id);
            if (Sessao != null)
            {
                ReadSessaoDto SessaoDto = _mapper.Map<ReadSessaoDto>(Sessao);
                return SessaoDto;
            }
            return null;
        }

        public Result DeletaSessao(int id)
        {
            Sessao sessao = _context.Sessoes.FirstOrDefault(Sessao => Sessao.Id == id);
            if (sessao == null)
            {
                return Result.Fail("Sessão não encontrada");
            }
            _context.Remove(sessao);
            _context.SaveChanges();
            return Result.Ok();
        }

        public List<ReadSessaoDto> RecuperaSessoes(string nomeCinema, string nomeFilme)
        {
            List<Sessao> sessoes = _context.Sessoes.ToList();

            if (string.IsNullOrEmpty(nomeCinema) && string.IsNullOrEmpty(nomeFilme))
            {
                sessoes = _context.Sessoes.ToList();
            }
            else
            {
                if (!string.IsNullOrEmpty(nomeCinema)) 
                {
                    sessoes = sessoes.
                          Where(sessao => sessao.Cinema.Nome == nomeCinema).ToList();
                }
                if (!string.IsNullOrEmpty(nomeFilme)) 
                {
                    sessoes = sessoes.
                          Where(sessao => sessao.Filme.Titulo == nomeFilme).ToList();
                }
            }

            if (sessoes == null) return null;
            List<ReadSessaoDto> sessoesDto = _mapper.Map<List<ReadSessaoDto>>(sessoes);

            return sessoesDto;
        }
    }
}
