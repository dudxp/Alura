import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.inserirNovoColaborador({
      nome,
      cargo,
      imagem,
      time
    })
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do cliente</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          alterandoEstado={(valor) => setNome(valor)}
          obrigatorio={true}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          alterandoEstado={(valor) => setCargo(valor)}
          obrigatorio={true}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          alterandoEstado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          alterandoEstado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
