import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  id,
  selecionado,
  completado,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} 
                  ${selecionado ? style.itemSelecionado : ""}
                  ${completado ? style.itemCompletado : ""}`}
      onClick={() =>
        !completado && selecionaTarefa({
          tarefa,
          tempo,
          id,
          selecionado,
          completado,
        })
      }
    >
      <div className={style.itemTarefa}>{tarefa}</div>
      <span className={style.itemTempo}>{tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="Tarefa completada"></span>
      )}
    </li>
  );
}
