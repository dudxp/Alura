import React from "react";
import Button from "../Botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component {
  state = {
    tarefa:"Typescript",
    tempo:"01:00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    console.log('state: ', this.state.tarefa)
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo:
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento =>
              this.setState({
                ...this.state, tarefa: evento.target.value
              })
            }
            placeholder="O que você deseja estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo para estudar:</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={evento =>
              this.setState({
                ...this.state,tempo: evento.target.value
              })
            }
            id="tempo"
            min="00:00:00"
            max="03:00:00"
            required
          />
        </div>
        <Button>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Formulario;
