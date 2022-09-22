using bytebank.Modelos.Conta;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ATENDIMENTO.bytebank.Util
{
    public class ListaDeContasCorrentes
    {
        private ContaCorrente[] _itens = null;
        private int _proximaPosicao = 0;

        public int Tamanho 
        {
            get => _proximaPosicao;
        }

        public ListaDeContasCorrentes (int tamanhoInicial = 5) 
        {
            _itens = new ContaCorrente[tamanhoInicial];
        }

        public void Adicionar(ContaCorrente conta) 
        {
            if (conta == null)
            {
                throw new ArgumentNullException(nameof(conta));
            }

            VerificarCapacidade(_proximaPosicao + 1);
            _itens[_proximaPosicao] = conta;
            _proximaPosicao++;
        }

        public void AdicionarVarios(params ContaCorrente[] conta)
        {
            if (conta == null)
            {
                throw new ArgumentNullException(nameof(conta));
            }

            for (int i = 0; i < conta.Length; i++) 
            { 
                VerificarCapacidade(_proximaPosicao + 1);
                _itens[_proximaPosicao] = conta[i];
                _proximaPosicao++;
            }
        }

        public void Remover (ContaCorrente conta) 
        {
            if (conta == null)
            {
                throw new ArgumentNullException(nameof(conta));
            }
            else if (_itens == null)
            {
                return;
            }

            int indiceItem = -1;
            for (int i = 0; i < _itens.Length; i++)
            {
                ContaCorrente contaAtual = _itens[i];
                if (contaAtual == conta) 
                {
                    indiceItem = i;
                    break;
                }
            }

            if (indiceItem != -1) 
            {
                for (int i = indiceItem; i < _proximaPosicao-1; i++)
                {
                    _itens[i] = _itens[i + 1];
                }
                _proximaPosicao--;
                _itens[_proximaPosicao] = null; 
            }
        }

        private void VerificarCapacidade(int tamanhoNecessario) 
        {
            if (_itens.Length >= tamanhoNecessario) 
            {
                return;
            }
            ContaCorrente[] novoArrayContas = new ContaCorrente[tamanhoNecessario];

            for(int i = 0; i < _itens.Length; i++) 
            {
                novoArrayContas[i] = _itens[i];
            }
            _itens = novoArrayContas;
        }

        public void MostrarValoresLista() 
        {
            if (_itens == null) 
            {
                Console.WriteLine("Lista vazia.");
            };

            for (int i = 0; i < _itens.Length; i++) 
            {
                if (_itens[i] != null) 
                { 
                    ContaCorrente contaAtual = _itens[i];
                    Console.WriteLine($"Indice({i}) - Conta: {contaAtual.Conta}, Agência: {contaAtual.Numero_agencia}");
                }
            }
        }

        public ContaCorrente RetornarContaNoIndice(int indice) 
        { 
            if ((indice < 0) || (indice >= Tamanho)) 
            {
                throw new ArgumentOutOfRangeException(nameof(indice));
            }
            return _itens[indice];
        }

        public ContaCorrente this[int indice] 
        {
            get 
            {
                return RetornarContaNoIndice(indice);
            }
        }
    }
}
