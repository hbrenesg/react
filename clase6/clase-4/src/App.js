import logo from './logo.svg';
import './App.css';
// import Aviso from './componentes/aviso/Aviso';
// import Publicacion from './componentes/publicacion/Publicacion';
import Eventos from './eventos/Eventos';
import Conmutador from './componentes/conmutador/Conmutador';
import Listado from './componentes/listado/Listado';
import Saludo from './componentes/saludo/Saludo';
import Autenticacion from './componentes/autenticacion/Autenticacion';
import Avisos from './componentes/avisos/Avisos';
import OperadorCondicional from './componentes/operadorCondicional/OperadorCondicional';
import Ventana from './componentes/ventana/Ventana';

function App() {
  // return (
  //   <div>
  //     <Aviso nombre="José" edad="39" />
  //     <Aviso nombre="María" edad="30" />
  //     <h1>Otro componente: {Date()}</h1>
  //     <Aviso nombre="Jorge" edad="40" />

  //     <br></br>

  //     <Publicacion autor={{ nombre: 'Pedro', puesto: 'Editor' }} texto="Publicación de prueba" fecha="10/07/2023" />

  //   </div>
  // );

  const AVISOS = ["Advertencia: Cuidado...", "Información: Recomendamos...", "Error: Problema...."];

  return (
    <div>
      <Ventana />

      <OperadorCondicional />

      <Avisos listaAvisos={AVISOS} nombre="Rebeca" />

      <Autenticacion nombre="Pablo" />
      {/* <Saludo estaAutenticado={false} nombre="Hermes" /> */}

      <Eventos />

      <Conmutador />

      <Listado></Listado>
    </div>
  );
}

export default App;
