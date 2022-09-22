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
            TestarListaGenerica();

            Console.ReadLine();
        }



        static void TestarListaGenerica() 
        {
            Lista<int> idades = new Lista<int>();

            idades.Adicionar(1);
            idades.Adicionar(2);
            idades.Adicionar(3);
            idades.Adicionar(4);
            idades.Adicionar(5);
            idades.AdicionarVarios(90,12,344,12);

            Console.WriteLine("--Lista de idades--");
            for (int i = 0; i < idades.Tamanho; i++) 
            {
                Console.WriteLine($"Posição {i}: Idade {idades[i]}");
            }

            Lista<string> nomes = new Lista<string>();

            nomes.Adicionar("Eduardo");
            nomes.Adicionar("Maiara");
            nomes.Adicionar("Sérgio");
            nomes.Adicionar("Carlos");
            nomes.Adicionar("Fernanda");
            nomes.Adicionar("Fernando");
            nomes.AdicionarVarios("Fábio","Lucas","Thiago");

            Console.WriteLine("--Lista de nomes--");
            for (int i = 0; i < nomes.Tamanho; i++)
            {
                Console.WriteLine($"Posição {i}: Nome {nomes[i]}");
            }
        }

        static void TestarListaObject() 
        {
            ListaDeObject listaDeIdades = new ListaDeObject();

            listaDeIdades.Adicionar(12);
            listaDeIdades.Adicionar(13);
            listaDeIdades.Adicionar(23);
            listaDeIdades.Adicionar(56);
            listaDeIdades.Adicionar(78);
            listaDeIdades.AdicionarVarios(90,56,223,445,2);

            for (var i = 0; i < listaDeIdades.Tamanho; i++) 
            {
                int idade = (int)listaDeIdades[i];
                Console.WriteLine($"Idade na posição {i}: {idade}");
            }
        }


        static void TestarSomarVariosComParams() 
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

        static void TestarAdicionarVariosComParams() 
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

        static void TestarAdicionarPegandoValorEmPosicaoNoArray()
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

        static void TestarAdicionarPegandoValorEmPosicao() 
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

        static void TestarArrayDeContaCorrente()
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

        static void TestarArrayInt()
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
