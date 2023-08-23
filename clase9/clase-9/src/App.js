import logo from './logo.svg';
import './App.css';
import Formulario from './formulario/Formulario';
import Resultado from './resultado/Resultado';
import FormularioContador from './formulariocontador/FormularioContador';

function App() {
  return (
    <div className="App">
      <Formulario></Formulario>
      <Resultado></Resultado>

      <h2>Otro ejemplo:</h2>
      <FormularioContador></FormularioContador>
    </div>
  );
}

export default App;
