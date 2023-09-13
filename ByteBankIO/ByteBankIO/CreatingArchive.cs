using ByteBankIO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;

partial class Program
{
    static void CreateArchive()
    {
        var pathNewFile = "accountsExported.csv";

        using (var fileStream = new FileStream(pathNewFile,FileMode.Create))
        {
            var account = new ContaCorrente(458, 7895);
            account.Depositar(477.90);

            var holder = new Cliente();
            holder.Nome = "Alexandre Santos";
            account.Titular = holder;
            
            var bytes = Encoding.UTF8.GetBytes(account.CSVLine());

            fileStream.Write(bytes, 0, bytes.Length);
        }
    }

    static void CreateArchiveWithWriter()
    {
        var pathNewFile = "accountsExported.csv";
        using (var fileStream = new FileStream(pathNewFile, FileMode.Create))
        using (var writer = new StreamWriter(fileStream))
        {
            var account = new ContaCorrente(1, 9090);
            account.Depositar(623.43);

            var holder = new Cliente();
            holder.Nome = "Maria Alecrina";
            account.Titular = holder;

            writer.Write(account.CSVLine());
        }
    }

    static void TestWriter()
    {
        var pathNewFile = "accountsExported.csv";
        using (var fileStream = new FileStream(pathNewFile, FileMode.Create))
        using (var writer = new StreamWriter(fileStream))
        {
            for (var i = 0; i  < 10000; i++)
            {
                writer.WriteLine($"Line {i}");
                writer.Flush();
                Console.WriteLine(i);
            }
        }
    }
}

