using ByteBank_ADM.Funcionarios;
using ByteBank_ADM.Utilitario;
using ByteBank_ADM.SistemaInterno;
using ByteBank_ADM.ParceriaComercial;

Console.WriteLine("Boas vindas ao ByteBank Administração!\n");

//CalcularBonificacao();
UsarSistema();

Console.ReadKey();

void CalcularBonificacao()
{

    GerenciadorBonificacao gerenciador = new GerenciadorBonificacao();

    Designer pedro = new Designer("546.879.157-20");
    pedro.Nome = "Pedro";
    
    Diretor maria = new Diretor("454.658.148-3");
    maria.Nome = "Maria";

    GerenteContas jose = new GerenteContas("454.455.148-3");
    jose.Nome = "Jose";

    Auxiliar mathias = new Auxiliar("454.455.148-3");
    mathias.Nome = "Mathias";

    Desenvolvedor desenvolvedor = new Desenvolvedor("090.556.324-09");
    desenvolvedor.Nome = "Eduardo";

    gerenciador.Registrar(pedro);
    gerenciador.Registrar(maria);
    gerenciador.Registrar(jose);
    gerenciador.Registrar(mathias);
    gerenciador.Registrar(desenvolvedor);

    Console.WriteLine("Total de bonificaçõa: " + gerenciador.GetTotalBonificacao());
}

void UsarSistema()
{
    var sistemaInterno = new SistemaInterno();

    var roberta = new Diretor("678.998.324-90");
    roberta.Nome = "Roberta";
    roberta.Senha = "123";

    var ursula = new GerenteContas("678.555.327-90");
    ursula.Nome = "Ursula";
    ursula.Senha = "56";

    var joao = new ParceiroComercial();
    joao.Senha = "123";

    sistemaInterno.Logar(roberta,"123");
    sistemaInterno.Logar(ursula,"56");
    sistemaInterno.Logar(joao, "123");
}


