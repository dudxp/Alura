﻿using FilmesAPI.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FilmesAPI.Data.Dtos
{
    public class ReadGerenteDto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public object Cinemas { get; set; }
    }
}
