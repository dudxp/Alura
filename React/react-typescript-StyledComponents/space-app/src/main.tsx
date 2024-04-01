import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import EstilosGlobais from './componentes/EstilosGlobais/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EstilosGlobais />
    <App />
  </React.StrictMode>
);
