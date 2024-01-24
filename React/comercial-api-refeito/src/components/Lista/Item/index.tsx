import style from "../Lista.module.scss";

export default function Item(props: { tarefa: string; tempo: string }) {
  const {tarefa, tempo} = props;
  return (
    <li className={style.item} >
        <div className={style.itemTarefa}>{tarefa}</div>
        <span className={style.itemTempo}>{tempo}</span>
    </li>
  );
}
