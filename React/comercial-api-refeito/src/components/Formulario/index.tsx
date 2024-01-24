import React from "react";
import style from "./Formulario.module.scss";
import Botao from "../Botao";
import ITarefa from "../../types/tarefa";

class Formulario extends React.Component <{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
  state = {
    tarefa: "",
    tempo: "00:00:00",
    id: "",
    ativo: false
  }

  adicionarTarefa (evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();

    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Novo estudo:</label>
          <input
            type="text"
            id="tarefa"
            placeholder="O que você deseja estudar?"
            value={this.state.tarefa}
            onChange={evento =>
              this.setState({
                ...this.state, tarefa: evento.target.value
              })
            }
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo da tarefa:</label>
          <input
            type="time"
            id="tempo"
            step="1"
            min="00:00:00"
            max="03:00:00"
            value={this.state.tempo}
            onChange={evento =>
              this.setState({
                ...this.state, tempo: evento.target.value
              })
            }
            required
          />
        </div>
        <Botao tipo={"submit"}>Inserir</Botao>
      </form>
    );
  }
}

export default Formulario;
