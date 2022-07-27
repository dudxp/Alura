using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ByteBank.Modelos;
using ByteBank.Modelos.Funcionarios;

namespace ByteBank.SistemaAgencia
{
    class Program
    {
        static void Main(string[] args)
        {
            TestaSomarVariosComParams();

            Console.ReadLine();
        }

        static void TestaSomarVariosComParams() 
        {
            Console.WriteLine($"Retorno do somar vários: {SomarVarios(3, 4, 5, 6, 7, 100, 566)}");
            Console.WriteLine($"Retorno do somar vários 2: {SomarVarios(296,655,12)}");
        }

        static int SomarVarios (params int[] numeros) 
        {
            int acumulador = 0;

            foreach (int numero in numeros) 
            {
                acumulador += numero;
            }
            return acumulador;
        }

        static void TestaAdicionarVariosComParams() 
        {
            ListaDeContaCorrente lista = new ListaDeContaCorrente();

            ContaCorrente contaDoGui = new ContaCorrente(546, 5674976);

            ContaCorrente[] contas = new ContaCorrente[]
            {
                contaDoGui,
                new ContaCorrente(874, 453333),
                new ContaCorrente(874, 5679445)
            };

            lista.AdicionarVarios(contas);

            lista.AdicionarVarios(
                contaDoGui,
                new ContaCorrente(874, 453333),
                new ContaCorrente(874, 5679445)
                );

            for (int i = 0; i < lista.Tamanho; i++)
            {
                ContaCorrente conta = lista[i];
                Console.WriteLine($"Conta corrente posição {i}: Numero:{conta.Numero} e Agência:{conta.Agencia}");
            }
        }

        static void TestaAdicionarPegandoValorEmPosicaoNoArray()
        {
            ListaDeContaCorrente lista = new ListaDeContaCorrente();

            ContaCorrente contaDoGui = new ContaCorrente(546, 5674976);

            lista.Adicionar(contaDoGui);

            lista.Adicionar(new ContaCorrente(874, 5679787));
            lista.Adicionar(new ContaCorrente(874, 5679754));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 56666));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 453333));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 5679445));

            for (int i = 0; i < lista.Tamanho; i++)
            {
                ContaCorrente conta = lista[i];
                Console.WriteLine($"Conta corrente posição {i}: Numero:{conta.Numero} e Agência:{conta.Agencia}");
            }
        }

        static void TestaAdicionarPegandoValorEmPosicao() 
        {
            ListaDeContaCorrente lista = new ListaDeContaCorrente();

            ContaCorrente contaDoGui = new ContaCorrente(546, 5674976);

            lista.Adicionar(contaDoGui);

            lista.Adicionar(new ContaCorrente(874, 5679787));
            lista.Adicionar(new ContaCorrente(874, 5679754));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 56666));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 453333));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 5679445));
            lista.Adicionar(new ContaCorrente(874, 5679445));

            for (int i = 0; i < lista.Tamanho; i++)
            {
                ContaCorrente conta = lista.GetItemNoIndice(i);
                Console.WriteLine($"Conta corrente posição {i}: Numero:{conta.Numero} e Agência:{conta.Agencia}");
            }
        }

        static void TestaArrayDeContaCorrente()
        {
            ContaCorrente[] contas = new ContaCorrente[]
                {
                    new ContaCorrente(874, 5679787),
                    new ContaCorrente(874, 4456668),
                    new ContaCorrente(874, 7781438)
                };

            for (int indice = 0; indice < contas.Length; indice++)
            {
                ContaCorrente contaAtual = contas[indice];
                Console.WriteLine($"Conta {indice} {contaAtual.Numero}");
            }
        }

        static void TestaArrayInt()
        {
            // ARRAY de inteiros, com 5 posições!
            int[] idades = null;
            idades = new int[3];

            idades[0] = 15;
            idades[1] = 28;
            idades[2] = 35;
            //idades[3] = 50;
            //idades[4] = 28;
            //idades[5] = 60;

            Console.WriteLine(idades.Length);

            int acumulador = 0;
            for (int indice = 0; indice < idades.Length; indice++)
            {
                int idade = idades[indice];

                Console.WriteLine($"Acessando o array idades no índice {indice}");
                Console.WriteLine($"Valor de idades[{indice}] = {idade}");

                acumulador += idade;
            }

            int media = acumulador / idades.Length;
            Console.WriteLine($"Média de idades = {media}");
        }
    }
}
