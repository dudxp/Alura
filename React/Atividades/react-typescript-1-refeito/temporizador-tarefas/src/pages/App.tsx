import { useState } from 'react';
import Formulario from '../components/Formulario';
import style from './App.module.scss';
import ITarefas from '../components/types/ITarefas';
import ListaTarefas from '../components/ListaTarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <ListaTarefas tarefas={tarefas}/>
    </div>
  );
}

export default App;
