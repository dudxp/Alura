using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.SistemaAgencia
{
    public class ExtratorValorArgumentosURL
    {
        private readonly string _argumentos;
        public string URL { get; }

        public ExtratorValorArgumentosURL(string url)
        {
            if (string.IsNullOrEmpty(url)) throw new ArgumentException("O argumento " + nameof(url) + " não pode ser nulo ou vazio.");
            URL = url;

            int indiceInterrogacao = url.IndexOf('?');

            _argumentos = (url.Substring(indiceInterrogacao+1));
        }

        public string GetValor(string nomeParametro)
        {
            nomeParametro = nomeParametro.ToUpper();
            string argumentoEmCaixaAlta = _argumentos.ToUpper();

            string termo = (nomeParametro + '=');
            int incideTermo = argumentoEmCaixaAlta.IndexOf(termo);

            string resultado = _argumentos.Substring(incideTermo + termo.Length);
            int indiceEComercial = resultado.IndexOf('&');

            if (indiceEComercial == -1) return resultado;

            return resultado.Remove(indiceEComercial);
        }
    }
}
