import ITarefas from "../../types/ITarefas";
import style from "./Item.module.scss";

interface Props extends ITarefas {
  // tarefa: ITarefas
}

export default function Item(props: Props) {
  const { tarefa, tempo } = props;
  return (
    <li className={style.item}>
      <div>{tarefa}</div>
      <span>{tempo}</span>
    </li>
  );
}
