import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaDeRepositorios from './components/ListaDeRepositorios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListaDeRepositorios/>
      </header>
    </div>
  );
}

export default App;
