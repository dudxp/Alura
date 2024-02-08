import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministrativoRestaurante from "./paginas/Administrativo/Restaurante/AdministrativoRestaurante";
import AdministrativoFormulario from './paginas/Administrativo/Formulario';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdministrativoRestaurante/>}/>
    </Routes>
  );
}

export default App;
