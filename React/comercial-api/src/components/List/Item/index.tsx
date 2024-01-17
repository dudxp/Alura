import style from "../List.module.scss";

export default function Item (props:{tarefa: string, tempo: string}) {
    const {tarefa, tempo} = props;
    return (
        <li className={style.item}>
            <div>{tarefa}</div>
            <span>{tempo}</span>
        </li>
    )
}

