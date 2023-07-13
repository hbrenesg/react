import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX: es la unión entre javascript y XML(HTML)

const elemento = <div><h1>Hola <i>mundo</i></h1></div>;

var nombre = 'Hermes';

const elemento2 = <h1>Hola {nombre}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

const estilo = { 'background-color': 'yellow' };

const elemento3 = <div width="100%" style={estilo}>Prueba de Atributos</div>;

const elemento4 = (
  <div>
    <h1>
      Hola {nombre}!
    </h1>
    <h2>
      Bienvenido al sitio!
    </h2>
    <p>
      Tiempo actual:
      <span>{Date()}</span>
    </p>
  </div>
);


root.render(
  // [elemento, elemento2, elemento3]
  //elemento3
  elemento4
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
