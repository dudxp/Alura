import React from "react";
import style from "./List.module.scss";
import Item from "./Item";

function List() {
  const tarefas = [
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "02:00:00",
    },
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
      
        {tarefas.map((item, index) => (
          <Item
            // {...item}
            key={index}
            tarefa = {item.tarefa}
            tempo = {item.tempo}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
