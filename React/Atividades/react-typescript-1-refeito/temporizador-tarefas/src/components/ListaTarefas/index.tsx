import style from "./ListaTarefas.module.scss";
import ITarefas from "../types/ITarefas";
import Item from "./Item";

interface Props {
  tarefas: ITarefas[];
}

export default function ListaTarefas(props: Props) {
  const { tarefas } = props;

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} {...item}/>
        ))}
      </ul>
    </aside>
  );
}
