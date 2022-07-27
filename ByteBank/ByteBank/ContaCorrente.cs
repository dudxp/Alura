using System;

namespace ByteBank
{
    public class ContaCorrente
    {
        public Cliente Titular { get; set; }

        public static double TaxaOperacao { get; private set; }

        public static int TotalDeContasCriadas { get; private set; }

        public int Numero { get; set; }

        private int _agencia;
        public int Agencia
        {
            get => _agencia;
            
            set
            {
                if (value <= 0) return;
                _agencia = value;
            }
        }

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
            Agencia = agencia;
            Numero = numero;
            try
            {
                TaxaOperacao = 30 / TotalDeContasCriadas;
            } catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            TotalDeContasCriadas++;
        }

        public bool Sacar(double valor)
        {
            if (_saldo < valor) return false;
            
            _saldo -= valor;
            return true;
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
