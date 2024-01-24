import ITarefas from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

export default function Lista({tarefas}: {tarefas: ITarefas[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de tarefas:</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index} 
            tarefa={item.tarefa}
            tempo={item.tempo}
            />
        ))}
      </ul>
    </aside>
  );
}
