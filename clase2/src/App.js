import logo from './logo.svg';
import './App.css';

function Aviso(props) {
  return <h1>El nombre de la persona es {props.nombre} y su edad es {props.edad}.</h1>;
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Aviso nombre='José' edad={38}></Aviso>
      <Aviso nombre='José' edad={39}></Aviso>
      <h1>Otro componente:</h1>
      <Aviso nombre='José' edad={40}></Aviso>
    </div>
  );
}

export default App;
