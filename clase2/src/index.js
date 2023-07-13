import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function presentarHoraActual() {
//   const elemento = (
//     <div>
//       <h1>Hola Mundo</h1>
//       <p>La hora actual es {new Date().toLocaleTimeString()}</p>
//     </div>
//   );
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(elemento);
// }

// setInterval(presentarHoraActual, 10000);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const elementoDOM = <div></div>;

// function Saludo(props) {
//   return <h1>Bienvenido(a) {props.nombre + ' ' + props.primerApellido + ' ' + props.objetos.nombre}</h1>;
// }

// const elementoUsuario = <Saludo nombre='Maria' primerApellido='Barrantes' objetos={{ nombre: "aaa" }}></Saludo>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   elementoUsuario
// );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
