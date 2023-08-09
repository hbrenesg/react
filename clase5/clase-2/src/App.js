//import logo from './logo.svg';
import './App.css';
//import { Spinner } from 'reactstrap';
import Formulario from './componentes/formulario/Formulario';

// import Aviso from './componentes/aviso/Aviso';
// import Publicacion from './componentes/publicacion/Publicacion';
// import Reloj from './componentes/reloj/Reloj';
// import Eventos from './componentes/eventos/Eventos';
// import Conmutador from './componentes/conmutador/Conmutador';
// import Listado from './componentes/listado/Listado';
// import SiguienteContexto from './componentes/siguientecontexto/SiguienteContexto';
// import Saludo from './componentes/saludo/Saludo';
// import Autenticacion from './componentes/autenticacion/Autenticacion';
// import Avisos from './componentes/avisos/Avisos';
// import OperadorCondicional from './componentes/operadorcondicional/OperadorCondicional';
// import { Ventana } from './componentes/ventana/Ventana';
// import ListaElementos from './componentes/listaelementos/ListaElementos';
// import ListaElementosFiltro from './componentes/listaelementosfiltro/ListaElementosFiltro';

//function App() {
// return (
//   <div>
//     <Aviso nombre="José" edad="39" />
//     <Aviso nombre="María" edad="30" />
//     <h1>Otro componente: {Date()}</h1>
//     <Aviso nombre="Jorge" />

//     <br/>
//     <Publicacion autor={{nombre: 'Pedro', puesto:'Editor'}} texto="Publicación de prueba." fecha="04/07/2023"/>

//   </div>
// );

//const avisos = ['Advertencia: Cuidado... ', 'Información: Recomendamos ...'];

//return (
//<div>

//<ListaElementos enteros={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></ListaElementos>

//<ListaElementosFiltro enteros={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />


{/* <Ventana></Ventana>

      <OperadorCondicional />

      <Avisos listaAvisos={avisos} nombre="Rebeca"></Avisos>


      <Autenticacion nombre="Pablo"></Autenticacion> */}
{/* <Saludo estaAutenticado={false} nombre="Pablo"/> */ }
{/* 
      <SiguienteContexto lista="Componente SiguienteContexto"></SiguienteContexto>

      <br />
      <Listado cant="10"></Listado>
      <br />
      <Listado cant="4"></Listado>

      <Reloj nombre="José" />

      <Reloj nombre="Marcela" />

      <Reloj nombre="Marco" />

      <Eventos />

      <Conmutador /> */}

//    </div>
//);

//}


// function App() {
//   return (
//     <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
//       <a className="navbar-brand" href="#">
//         React

//         <Spinner color="primary" />
//       </a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
//         aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarCollapse">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Inicio <span className="sr-only">Actual</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Quienes Somos</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Proyectos</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Información de Contacto</a>
//           </li>
//         </ul>
//         <form className="form-inline mt-2 mt-md-0">
//           <input className="form-control mr-sm-2" type="text" placeholder="Información a consultar" aria-label="Buscar" />
//           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
//         </form>
//       </div>
//     </nav>
//   );
// }

function App() {
  return (
    <Formulario></Formulario>
  )
}

export default App;
