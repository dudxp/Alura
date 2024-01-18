using ByteBankIO;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Digite seu nome:");
        var nome = Console.ReadLine();

        var linhas = File.ReadAllLines(@"C:\temp\contas.txt");
        Console.WriteLine(linhas.Length);

        foreach (var linha in linhas)
        {
            Console.WriteLine(linha);
        }

        var bytesArquivo = File.ReadAllBytes(@"C:\temp\contas.txt");
        Console.WriteLine($"Arquivo contas.txt possui {bytesArquivo.Length} bytes");

        File.WriteAllText("escrevendoComClasseFile.txt", "Testando File.WriteAllText");

        Console.WriteLine("Aplicação Finalizada ...");

        Console.ReadLine();
    }
}