using ByteBank.Excecoes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                ContaCorrente conta = new ContaCorrente(0, 1230);
                conta.Depositar(50);
                Console.WriteLine(conta.Saldo);
                conta.Sacar(-500);
                Console.WriteLine(conta.Saldo);
                

            } 
            catch (ArgumentException ex) 
            {
                Console.WriteLine("Erro ArgumentException");
                Console.WriteLine(ex.Message);
            }
            catch (SaldoInsuficienteException ex)
            {
                Console.WriteLine("Erro SaldoInsuficienteException");
                Console.WriteLine(ex.Message);
            }

            Console.ReadKey();
        }
    }
}
