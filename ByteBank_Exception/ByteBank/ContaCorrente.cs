// using _05_ByteBank;

using ByteBank.Excecoes;
using System;

namespace ByteBank
{
    public class ContaCorrente
    {
        public Cliente Titular { get; set; }

        public static int TotalDeContasCriadas { get; private set; }


        private int _agencia;
        public int Agencia
        {
            get => _agencia;
            
            private set
            {
                if (value <= 0) return;
                _agencia = value;
            }
        }
        public int Numero { get; private set; }

        private double _saldo = 100;
        public double Saldo
        {
            get => _saldo;
            
            set
            {
                if (value < 0) return;
                _saldo = value;
            }
        }


        public ContaCorrente(int agencia, int numero)
        {
            if (agencia <= 0) throw new ArgumentException("O argumento agencia deve ser maior e diferente de 0 ",nameof(agencia));
            if (numero <= 0) throw new ArgumentException("O argumento numero deve ser maior e diferente de 0",nameof(numero));

            Agencia = agencia;
            Numero = numero;

            TotalDeContasCriadas++;
        }

        public void Sacar(double valor)
        {
            if (valor < 0) throw new ArgumentException("Valor de saque não pode ser negativo (Valor de Saque: " + valor + ")",nameof(valor));
            if (_saldo < valor) throw new SaldoInsuficienteException("Valor para sacar maior que o saldo disponivel (Saldo: " + Saldo + ", Valor a sacar: " + valor + ")");
            _saldo -= valor;
        }

        public void Depositar(double valor)
        {
            _saldo += valor;
        }

        public bool Transferir(double valor, ContaCorrente contaDestino)
        {
            if (_saldo < valor) return false;

            _saldo -= valor;
            contaDestino.Depositar(valor);
            return true;
        }
    }
}
