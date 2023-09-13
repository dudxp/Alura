using ByteBankIO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

partial class Program
{
    public void ArchiveReader()
    {
        var caminhoArquivo = "contas.txt";
        using (var fileStream = new FileStream(caminhoArquivo, FileMode.Open))
        {
            var streamReader = new StreamReader(fileStream);
            //var line = streamReader.ReadLine();
            //var text = streamReader.ReadToEnd();
            //var number = streamReader.Read();
            while (!streamReader.EndOfStream)
            {
                var line = streamReader.ReadLine();
                var currentAccount = StringToCurrentAccount(line);
                Console.WriteLine(currentAccount.ToString());
            }
        }
    }
    static ContaCorrente StringToCurrentAccount(string line)
    {
        var fields = line.Split(',');
        var agency = fields[0];
        var number = fields[1];
        var balanceAsDouble = fields[2];
        var holderName = fields[3];

        var holder = new Cliente();
        holder.Nome = holderName;

        var result = new ContaCorrente(int.Parse(agency), int.Parse(number));
        result.Depositar(double.Parse(balanceAsDouble.Replace('.', ',')));
        result.Titular = holder;

        return result;
    }

}
