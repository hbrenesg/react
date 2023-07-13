// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // JSX

// const elemento = <div><h1>Hola <i>mundo</i></h1></div>;

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const nombre = "José";
// const elemento1 = <h1>Hola {nombre}!</h1>;

// function formatoNombre(usuario) {
//     return usuario.nombres + ' ' + usuario.primer_apellido + ' ' + usuario.segundo_apellido;
// }

// const usuario = {
//     nombres: "",
//     primer_apellido: "Salas",
//     segundo_apellido: "Rojas"
// }

// const elemento2 = (
//     <h1>
//         Hola {formatoNombre(usuario)}
//     </h1>
// );

// function obtenerSaludo() {
//     if (usuario.nombres !== "") {
//         return <h1>Hola {formatoNombre(usuario)}</h1>;
//     }
//     else {
//         return <h1>Hola desconocido!</h1>;
//     }
// }

// let i;
// let elements = [];

// for (i = 0; i < 5; i++) {
//     elements.push(<h2>Elemento: {i + 1}</h2>);
// }

// console.log("Hola");

// function obtenerCalificación(calificación) {
//     switch (calificación) {
//         case 4:
//             return <h1>Calificación muy baja!</h1>;
//             break;
//         case 6:
//             return <h1>Calificación baja!</h1>;
//             break;
//         case 8:
//             return <h1>Calificación alta!</h1>;
//             break;
//         case 10:
//             return <h1>Calificación muy alta!</h1>;
//             break;
//         default:
//             return <h1>Calificación desconocida!</h1>;
//             break;
//     }
// }

// const estilo = { 'background-color': 'yellow' };

// const elemento3 = <div width="100%" style={estilo}>Prueba de Atributos</div>;


// //let cal = 0;
// root.render(
//     // [elemento, elemento1, elemento2, obtenerSaludo()]
//     // elements
//     //obtenerCalificación(cal)
//     elemento3
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
