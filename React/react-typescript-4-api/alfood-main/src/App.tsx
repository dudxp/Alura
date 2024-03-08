import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import MenuPrincipalAdministrativo from './paginas/Administrativo/MenuPrincipalAdministrativo';
import ListaRestaurantes from './paginas/Administrativo/Restaurantes/ListaRestaurantes';
import FormularioRestaurante from './paginas/Administrativo/Restaurantes/FormularioRestaurante';
import ListaPratos from './paginas/Administrativo/Prato/ListaPratos';
import FormularioPratos from './paginas/Administrativo/Prato/FormularioPratos';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantes" element={<VitrineRestaurantes />} />
        
        <Route path="/admin" element={<MenuPrincipalAdministrativo/>}>
          <Route path="restaurantes"      element={<ListaRestaurantes/>}/>
          <Route path="restaurantes/novo" element={<FormularioRestaurante/>}/>
          <Route path="restaurantes/:id"  element={<FormularioRestaurante/>}/>
          <Route path="pratos"            element={<ListaPratos/>}/>
          <Route path="pratos/novo"       element={<FormularioPratos/>}/>
          <Route path="pratos/:id"        element={<FormularioPratos/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
