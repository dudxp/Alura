using ByteBank_ADM.SistemaInterno;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank_ADM.Funcionarios
{
    public class Diretor : FuncionarioAutenticavel
    {
        public Diretor(string cpf) : base(cpf,5000) 
        {
        }

        public override double GetBonificacao() => Salario * 0.5;

        public override void AumentarSalario() => Salario *= 1.15;
    }
}
