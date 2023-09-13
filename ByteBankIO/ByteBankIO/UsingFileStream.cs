using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


partial class Program
{
    static void FileStreamManipulation()
    {
        var caminhoArquivo = @"contas.txt";
        using (var fileStream = new FileStream(caminhoArquivo, FileMode.Open))
        {
            var totalReadBytes = -1;
            byte[] buffer = new byte[fileStream.Length];

            while (totalReadBytes != 0)
            {
                totalReadBytes = fileStream.Read(buffer, 0, buffer.Length);
                ReadBuffer(buffer, totalReadBytes);
            }
        }
    }

    static void ReadBuffer(byte[] buffer, int bytesRead)
    {
        var utf8 = new UTF8Encoding();
        var texto = utf8.GetString(buffer, 0, bytesRead);
        Console.Write(texto);
    }

    static void WriteBuffer(byte[] buffer)
    {
        var utf8 = new UTF8Encoding();
        var texto = utf8.GetString(buffer);
    }
}
