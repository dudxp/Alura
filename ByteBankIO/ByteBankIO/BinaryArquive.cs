using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

partial class Program
{
    static void BinaryWriter()
    {
        var pathNewFile = "accountsExportedTests.txt";
        using (var fileStream = new FileStream(pathNewFile, FileMode.Create))
        using (var writer = new BinaryWriter(fileStream))
        {
            writer.Write(456);
            writer.Write(1234);
            writer.Write(500.78);
            writer.Write("Alex Santos");
        }
    }

    static void BinaryReader()
    {
        var pathNewFile = "accountsExportedTests.txt";
        using (var fileStream = new FileStream(pathNewFile, FileMode.Open))
        using (var reader = new BinaryReader(fileStream))
        {
            var agency = reader.ReadInt32();
            var accountNumber = reader.ReadInt32();
            var balance = reader.ReadDouble();
            var holderName = reader.ReadString();

            Console.WriteLine($"{agency},{accountNumber},{balance},{holderName}");
        }
    }

    static void UsingEntryString()
    {
        using (var entryStream = Console.OpenStandardInput())
        {
            var buffer = new byte[1024];
            var readBytes = entryStream.Read(buffer, 0, buffer.Length);

            Console.WriteLine($"Bytes read on console: {readBytes}");
        }
    }
}
