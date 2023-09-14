import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const adicionarNovoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        inserirNovoColaborador={(colaborador) =>
          adicionarNovoColaborador(colaborador)
        }
      />
      <Time label="Programação"/> 
      <Time label="Front-End"/>
      <Time label="Data Science"/>
      <Time label="Devops"/>
      <Time label="UX e Design"/>
      <Time label="Mobile"/>
      <Time label="Inovação e Gestão"/>
    </div>
  );
}

export default App;
