import { useState } from "react";
import Botao from "../Botao";
import ITarefas from "../types/ITarefas";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}

export default function Formulario(props: Props) {
  const { setTarefas } = props;
  const [tempo, setTempo] = useState("00:00:00");
  const [tarefa, setTarefa] = useState("");

  function posicionarTarefas(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTempo("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={posicionarTarefas}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Nome da tarefa:</label>
        <input
          name="tarefa"
          id="tarefa"
          placeholder="Digite o nome da tarefa"
          type="text"
          value={tarefa}
          onChange={(evento) => {setTarefa(evento.target.value)}}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo de estudo:</label>
        <input
          name="tempo"
          id="tempo"
          step="1"
          type="time"
          min="00:00:00"
          max="03:00:00"
          value={tempo}
          onChange={(evento) => {setTempo(evento.target.value)}}
          required
        />
      </div>
      <Botao tipo="submit">Inserir</Botao>
    </form>
  );
}
