import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        {/* 
          <div className={style["novaTarefa__-container"]}>
         */}
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo:</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você deseja estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="">Tempo para estudar:</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="03:00:00"
            required
          />
        </div>
        <Button 
          texto="Adicionar"
        />
      </form>
    );
  }
}

export default Form;
