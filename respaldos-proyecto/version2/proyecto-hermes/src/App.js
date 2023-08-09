// import logo from './logo.svg';
import './App.css';
import Encabezado from './componentes/encabezado/Encabezado.js';
import ArtDescripcionLaboral from './componentes/artDescripcionPersonal/ArtDescripcionPersonal.js';
import ArtHabilidades from './componentes/artHabilidades/ArtHabilidades.js';
import ArtExpercienciaLaboral from './componentes/artExperienciaLaboral/ArtExperienciaLaboral.js';
import ArtComentarios from './componentes/artComentarios/ArtComentarios.js';
import PiePagina from './componentes/piePagina/PiePagina.js';

function App() {
  return (
    <div>
      <Encabezado urlImagenLogo='./img/logoProyectoReact.png'></Encabezado>
      <ArtDescripcionLaboral urlImagenPerfil='./img/imagenPerfil.png'></ArtDescripcionLaboral>
      <ArtHabilidades></ArtHabilidades>
      <ArtExpercienciaLaboral></ArtExpercienciaLaboral>
      <ArtComentarios></ArtComentarios>
      <PiePagina urlImagenIcono='./img/iconoProyectoReact.png'></PiePagina>
    </div>
  );
}

export default App;
