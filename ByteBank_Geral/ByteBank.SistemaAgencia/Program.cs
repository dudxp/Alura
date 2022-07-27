using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using ByteBank.Modelos;
using ByteBank.Modelos.Funcionarios;
using Humanizer;

namespace ByteBank.SistemaAgencia
{
    class Program
    {
        static void Main(string[] args)
        {
            ListaDeContaCorrente lista = new ListaDeContaCorrente();

            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));
            lista.Adicionar(new ContaCorrente(123,123));


            Console.ReadLine();
        }
    }
}
