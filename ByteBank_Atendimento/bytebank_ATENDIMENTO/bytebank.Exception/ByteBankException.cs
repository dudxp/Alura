using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank_ATENDIMENTO.bytebank.Exception
{

    [Serializable]
    public class ByteBankException : System.Exception
    {
        public ByteBankException() { }
        public ByteBankException(string message) : base("Aconteceu uma Exceção -> " +  message) { }
        public ByteBankException(string message, System.Exception inner) : base(message, inner) { }
        protected ByteBankException(
          System.Runtime.Serialization.SerializationInfo info,
          System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
    }
}
