using bytebank.Modelos.Conta;
using bytebank_ATENDIMENTO.bytebank.Exception;
using bytebank_ATENDIMENTO.bytebank.Util;
using System.Collections;

#region Exemplos de Arrays C#
void TestaArrayInt() 
{
    int[] idades = new int[5];

    idades[0] = 17;
    idades[1] = 40;
    idades[2] = 20;
    idades[3] = 12;
    idades[4] = 67;

    Console.WriteLine($"Tamanho do Array {idades.Length}");

    int acumulador = 0;
    for (int i = 0; i < idades.Length; i++)
    {
        int idade = idades[i];
        Console.WriteLine($"Idade na posição [{i}] = {idade}");
        acumulador += idade;
    }
    int media = acumulador / idades.Length;
    Console.WriteLine($"Média das idade = {media}");
}

void TestaBuscaPalavra() 
{
    string[] arrayDePalavras = new string[5];

    for (int i = 0; i < arrayDePalavras.Length; i++)
    {
        Console.WriteLine($"Digite {i+1} Palavra: ");
        arrayDePalavras[i] = Console.ReadLine();
    }

    Console.WriteLine("Digite palavra a ser encontrada: ");
    var busca = Console.ReadLine();
    
    foreach (string palavra in arrayDePalavras) 
    {
        if (palavra.Equals(busca)) 
        {
            Console.WriteLine($"Palavra encontrada = {busca}");
            break;
        } 
    }

    Console.WriteLine($"Palavra não encontrada = {busca}");
}

void TestaClasseArray() 
{
    Array amostra = Array.CreateInstance(typeof(double), 5);

    amostra.SetValue(4.3,  0);
    amostra.SetValue(1.78, 1);
    amostra.SetValue(12,   2);
    amostra.SetValue(4.90, 3);
    amostra.SetValue(7.77, 4);

    //[4.3][1.78][12][4.90][7.77]
    TestaMediana(amostra);
}

void TestaMediana(Array array)
{
    if (array == null || array.Length == 0)
    {
        Console.WriteLine("Array para cálculo da mediana está vazio ou nulo.");
    }

    double[] numerosOrdenados = (double[])array.Clone();
    Array.Sort(numerosOrdenados);

    int tamanho = numerosOrdenados.Length;
    int meio = tamanho / 2;
    double mediana = (tamanho % 2 != 0) ? numerosOrdenados[meio] :
                                         (numerosOrdenados[meio] + numerosOrdenados[meio - 1]) / 2;
    Console.WriteLine($"Com base na amostra a mediana é igual a {mediana}");
}

void TestaArrayDeContasCorrentes()
{
    ContaCorrente[] listaDeContas = new ContaCorrente[]
    {
        new ContaCorrente(123,"1222"),
        new ContaCorrente(1455,"1234"),
        new ContaCorrente(555,"2232"),
        new ContaCorrente(666,"666")
    };

    for (int i = 0; i < listaDeContas.Length; i++)
    {
        ContaCorrente contaAtual = listaDeContas[i];
        Console.WriteLine($"Indice({i}) - Conta atual:{contaAtual.Conta}, Agencia:{contaAtual.Numero_agencia}");
    }
}

void TestaListaDeContasCorrentes() 
{
    ListaDeContasCorrentes lista = new ListaDeContasCorrentes();

    lista.Adicionar(new ContaCorrente(123, "1222"));
    lista.Adicionar(new ContaCorrente(1455, "1234"));
    lista.Adicionar(new ContaCorrente(555, "2232"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));

    ContaCorrente conta = null;
    try
    {
        lista.Adicionar(conta);
    } catch (Exception ex)
    { Console.WriteLine(ex.ToString()); }

    lista.MostrarValoresLista();

}

void TestaRemoverContaCorrente() 
{
    ListaDeContasCorrentes lista = new ListaDeContasCorrentes();

    ContaCorrente conta = new ContaCorrente(555, "2232");

    lista.Adicionar(new ContaCorrente(123, "1222"));
    lista.Adicionar(new ContaCorrente(1455, "1234"));
    lista.Adicionar(conta);
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));

    lista.MostrarValoresLista();
    Console.WriteLine("-----Removeu----");
    lista.Remover(conta);

    lista.MostrarValoresLista();
}

void TestaRetornarValorNoIndice() 
{
    ListaDeContasCorrentes lista = new ListaDeContasCorrentes();

    ContaCorrente conta = new ContaCorrente(555, "2232");

    lista.Adicionar(new ContaCorrente(123, "1222"));
    lista.Adicionar(new ContaCorrente(1455, "1234"));
    lista.Adicionar(conta);
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));
    lista.Adicionar(new ContaCorrente(666, "666"));

    for (int i = 0; i < lista.Tamanho; i++) 
    {
        ContaCorrente contaAtual = lista.RetornarContaNoIndice(i);
        Console.WriteLine($"Indice [{i}] (Agência: {contaAtual.Numero_agencia}, Conta: {contaAtual.Conta})");
    }
    Console.WriteLine("-----------");
    for (int i = 0; i < lista.Tamanho; i++)
    {
        ContaCorrente contaAtual = lista[i];
        Console.WriteLine($"Indice [{i}] (Agência: {contaAtual.Numero_agencia}, Conta: {contaAtual.Conta})");
    }
}

void TestaAdicionarVarios()
{
    ListaDeContasCorrentes lista = new ListaDeContasCorrentes();

    ContaCorrente conta = new ContaCorrente(555, "2232");

    lista.AdicionarVarios(new ContaCorrente(123, "1222"),
    conta,
    new ContaCorrente(1455, "1234"),
    new ContaCorrente(666, "666"),
    new ContaCorrente(666, "666"),
    new ContaCorrente(666, "666"),
    new ContaCorrente(666, "666"),
    new ContaCorrente(666, "666"));

    lista.MostrarValoresLista();
}
#endregion 

Console.WriteLine("Boas Vindas ao ByteBank, Atendimento.");

List<ContaCorrente> _listaDeContas = new List<ContaCorrente>() {
    new ContaCorrente(95,"123456-X") {Saldo=100, Titular = new Cliente{Cpf = "11111",Nome = "Eduardo",Profissao = "Dev"} },
    new ContaCorrente(95,"789101-A") {Saldo=200, Titular = new Cliente{Cpf = "22222",Nome = "Henrique",Profissao = "Professor"} },
    new ContaCorrente(95,"112131-B") {Saldo=60,  Titular = new Cliente{Cpf = "33333",Nome = "Carlos", Profissao = "Pedreiro"} }
};

AtendimentoAoCliente();

void AtendimentoAoCliente() 
{
    try 
    { 
    
        char opcao = ' ';
        while (opcao != '0') 
        {
            Console.Clear();
            Console.WriteLine("==================================");
            Console.WriteLine("===========Atendimento============");
            Console.WriteLine("===1 - Cadastrar Conta         ===");
            Console.WriteLine("===2 - Listar Conta            ===");
            Console.WriteLine("===3 - Remover Conta           ===");
            Console.WriteLine("===4 - Ordenar Conta           ===");
            Console.WriteLine("===5 - Pesquisar Conta         ===");
            Console.WriteLine("===0 - Sair do Sistema         ===");
            Console.WriteLine("==================================");
            Console.WriteLine("\n\n");
            Console.WriteLine("Digite a opção desejada: ");
            try 
            {
                opcao = Console.ReadLine()[0];
            }
            catch (Exception ex) 
            {
                throw new ByteBankException();
            }
            switch (opcao)
            {
                case '1': CadastrarConta();
                    break;
                case '2': ListarConta();
                    break;
                case '3': RemoverConta();
                    break;
                case '4': OrdenarConta();
                    break;
                case '5': PesquisarConta();
                    break;
                default:
                    Console.WriteLine("Opção não implementada.");
                    break;
            }
        }
    } 
    catch (ByteBankException ex)
    {
        Console.WriteLine($"{ex.Message}");
    }
}

void ListarConta()
{
    Console.Clear();
    Console.WriteLine("==================================");
    Console.WriteLine("=========LISTA DE CONTAS==========");
    Console.WriteLine("==================================");
    Console.WriteLine("\n");
    if (_listaDeContas.Count <= 0) 
    {
        Console.WriteLine("... Não há contas cadastradas! ...");
        Console.ReadKey();
        return;
    }
    foreach (ContaCorrente conta in _listaDeContas) 
    {
        Console.WriteLine($" === DADOS DA CONTA ===");
        Console.WriteLine($"Número da Conta : {conta.Conta}");
        Console.WriteLine($"Saldo da conta: { conta.Saldo}");
        Console.WriteLine($"Titular da Conta: {conta.Titular.Nome}" );
        Console.WriteLine($"CPF do Titular  : {conta.Titular.Cpf}" );
        Console.WriteLine($"Profissão do Titular: { conta.Titular.Profissao}");
        Console.WriteLine(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }
    Console.ReadKey();
}

void CadastrarConta() 
{
    Console.Clear();
    Console.WriteLine("==================================");
    Console.WriteLine("========CADASTRO DE CONTAS========");
    Console.WriteLine("==================================");
    Console.WriteLine("\n");
    Console.WriteLine("===   Informe dados da conta   ===");

    Console.Write("Número da conta: ");
    string numeroConta = Console.ReadLine();

    Console.Write("Número da Agência: ");
    int numeroAgencia = int.Parse(Console.ReadLine());

    ContaCorrente conta = new ContaCorrente(numeroAgencia,numeroConta);

    Console.Write("Informa o saldo inicial: ");
    conta.Saldo = double.Parse(Console.ReadLine());

    Console.Write("Informe o nome do Titular: ");
    conta.Titular.Nome = Console.ReadLine();

    Console.Write("Informe o CPF do Titular: ");
    conta.Titular.Cpf = Console.ReadLine();

    Console.Write("Informe a Profissão do Titular: ");
    conta.Titular.Profissao = Console.ReadLine();

    _listaDeContas.Add(conta);

    Console.Write("...Conta cadastrada com sucesso!...");
    Console.ReadKey();
}

void RemoverConta() 
{
    Console.Clear();
    Console.WriteLine("===============================");
    Console.WriteLine("===      REMOVER CONTAS     ===");
    Console.WriteLine("===============================");
    Console.WriteLine("\n");
    Console.Write("Informe o número da Conta: ");
    string numeroConta = Console.ReadLine();
    ContaCorrente conta = null;
    foreach (ContaCorrente item in _listaDeContas) 
    {
        if (item.Conta.Equals(numeroConta)) 
        {
            conta = item;
        }
    }
    if (conta != null)
    {
        _listaDeContas.Remove(conta);
        Console.WriteLine("... Conta removida da lista! ...");
    }
    else
    {
        Console.WriteLine(" ... Conta para remoção não encontrada ...");
    }
    Console.ReadKey();
}

void OrdenarConta() 
{
    _listaDeContas.Sort();
    Console.WriteLine("Lista ordenada com sucesso");
    Console.ReadKey();
}

void PesquisarConta()
{
    Console.Clear();
    Console.WriteLine("===============================");
    Console.WriteLine("===     PESQUISAR CONTAS    ===");
    Console.WriteLine("===============================");
    Console.WriteLine("\n");
    Console.Write("Deseja pesquisar por (1) NUMERO DA CONTA ou (2)CPF TITULAR ? ");
    switch (int.Parse(Console.ReadLine())) 
    {
        case 1:
            {
                Console.WriteLine("Informe o numero da conta:");
                string numeroConta = Console.ReadLine();
                ContaCorrente consultaConta = ConsultaPorNumeroConta(numeroConta);
                Console.WriteLine(consultaConta.ToString());
                break;
            }
        case 2:
            {
                Console.WriteLine("Informe o CPF do Titular:");
                string cpf = Console.ReadLine();
                ContaCorrente consultaCpf = ConsultaPorCPFTitular(cpf);
                Console.WriteLine(consultaCpf.ToString());
                break;
            }
        default:
            Console.WriteLine("Opção não implementada");
            break;
    }
    Console.ReadKey();
}

ContaCorrente ConsultaPorNumeroConta(string? numeroConta) 
{
    return _listaDeContas.Where(conta => conta.Conta == numeroConta).FirstOrDefault();

    //foreach (ContaCorrente contaCorrente in _listaDeContas) 
    //{
    //    if (contaCorrente.Conta.Equals(numeroConta)) { return contaCorrente; }
    //}
    //return null;
}

ContaCorrente ConsultaPorCPFTitular(string? cpf)
{

    var cpfLista = from contas in _listaDeContas
                   where contas.Titular.Cpf == cpf
                   select contas;

     
    return _listaDeContas.Where(conta => conta.Titular.Cpf == cpf).FirstOrDefault();

    //foreach (ContaCorrente contaCorrente in _listaDeContas)
    //{
    //    if (contaCorrente.Titular.Cpf.Equals(cpf)) { return contaCorrente; }
    //}
    //return null ;
}

#region Testes classe generica
////Testes dobre classes genéricas:
//Generica<int> teste1 = new Generica<int>();
//teste1.MostrarMensagem(10);

//Generica<string> teste2 = new Generica<string>();
//teste2.MostrarMensagem("Olá mundo!");

//public class Generica<T>
//{
//    public void MostrarMensagem(T t)
//    {
//        Console.WriteLine($"Exibindo {t}");
//    }
//}
#endregion

#region Exemplos de List
//List<ContaCorrente> _listaDeContas2 = new List<ContaCorrente>()
//{
//    new ContaCorrente(874, "5679787-A"),
//    new ContaCorrente(874, "4456668-B"),
//    new ContaCorrente(874, "7781438-C")
//};

//List<ContaCorrente> _listaDeContas3 = new List<ContaCorrente>()
//{
//    new ContaCorrente(951, "5679787-E"),
//    new ContaCorrente(321, "4456668-F"),
//    new ContaCorrente(719, "7781438-G")
//};

//_listaDeContas2.AddRange(_listaDeContas3);
//for (int i = 0; i < _listaDeContas2.Count; i++)
//{
//    Console.WriteLine($"Indice[{i}] = Conta [{_listaDeContas2[i].Conta}]");
//}

//var range = _listaDeContas3.GetRange(0, 1);
//for (int i = 0; i < range.Count; i++)
//{
//    Console.WriteLine($"Indice[{i}] = Conta [{range[i].Conta}]");
//}

//_listaDeContas2.Reverse();
//for (int i = 0; i < _listaDeContas2.Count; i++)
//{
//    Console.WriteLine($"Indice[{i}] = Conta [{_listaDeContas2[i].Conta}]");
//}

//Console.WriteLine("\n\n");

//_listaDeContas3.Clear();
//for (int i = 0; i < _listaDeContas3.Count; i++)
//{
//    Console.WriteLine($"Indice[{i}] = Conta [{_listaDeContas3[i].Conta}]");
//}
#endregion