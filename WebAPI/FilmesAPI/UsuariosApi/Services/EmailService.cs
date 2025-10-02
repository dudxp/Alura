using Microsoft.Extensions.Configuration;
using MailKit.Net.Smtp;
using MimeKit;
using System;
using UsuariosApi.Models;
using MailKit.Security;

namespace UsuariosApi.Services
{
    public class EmailService
    {
        public IConfiguration _configuration { get; }
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void EnviarEmail(string[] destinatario, string assunto, int usuarioId, string activationCode)
        {
            Mensagem mensagem = new Mensagem(destinatario, assunto, usuarioId, activationCode);

            var mesagemEmail = CriaCorpoEmail(mensagem);
            Enviar(mesagemEmail);
        }

        private void Enviar(MimeMessage mensagemEmail)
        {
            using(var client = new SmtpClient()) 
            {
                try 
                {
                    client.Connect(_configuration.GetValue<string>("EmailSettings:SmtpServer"),
                                   _configuration.GetValue<int>("EmailSettings:Port"),
                                   SecureSocketOptions.StartTls);
                    client.AuthenticationMechanisms.Remove("XOUATH2");
                    client.Authenticate(_configuration.GetValue<string>("EmailSettings:From"),
                                        _configuration.GetValue<string>("EmailSettings:Password"));
                    client.Send(mensagemEmail);
                }
                catch 
                {
                    throw;
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
        }

        private MimeMessage CriaCorpoEmail(Mensagem mensagem)
        {
            var emailFrom = _configuration.GetValue<string>("EmailSettings:From");
            var mensagemEmail = new MimeMessage();
            mensagemEmail.From.Add(new MailboxAddress(emailFrom, emailFrom));
            mensagemEmail.To.AddRange(mensagem.Destinatario);
            mensagemEmail.Subject = mensagem.Assunto;
            mensagemEmail.Body = new TextPart(MimeKit.Text.TextFormat.Text)
            {
                Text = mensagem.Conteudo
            };
            return mensagemEmail;
        }
    }
}
