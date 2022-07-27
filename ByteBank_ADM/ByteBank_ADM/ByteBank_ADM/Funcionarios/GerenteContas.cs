using ByteBank_ADM.SistemaInterno;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank_ADM.Funcionarios
{
    public class GerenteContas : FuncionarioAutenticavel
    {
        public GerenteContas(string cpf) : base(cpf,4000)
        {
        }
        public override double GetBonificacao() => Salario * 0.25;

        public override void AumentarSalario() => Salario *= 1.05;
    }
}
