import logo from './logo.svg';
import './App.css';
// import Aviso from './componentes/aviso/Aviso';
// import Publicacion from './componentes/publicacion/Publicacion';
import Eventos from './eventos/Eventos';
import Conmutador from './componentes/conmutador/Conmutador';

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

  return (
    <div>
      <Eventos />

      <Conmutador />
    </div>
  );
}

export default App;
