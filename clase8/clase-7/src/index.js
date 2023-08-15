import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import EnrutamientoAnidado from './enrutamientoanidado/EnrutamientoAnidado';
import reportWebVitals from './reportWebVitals';
import EnrutamientoNavegacion from './enrutamientoNavegacion/EnrutamientoNavegacion';
import EnrutamientoParametros from './enrutamientoParametros/EnrutamientoParametros';
import { HookEstado } from './hookEstado/HookEstado';
import { HookEstadoMultiple } from './hookEstadoMultiple/HookEstadoMultiple';
import { HookEfecto } from './hookEfecto/HookEfecto';
import { Componente } from './componente/Componente';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <EnrutamientoAnidado />
  // <EnrutamientoNavegacion />
  // <EnrutamientoParametros />
  // <HookEstado />
  // <HookEstadoMultiple />
  // <HookEfecto />
  <Componente />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
