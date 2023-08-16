import React from 'react';
import Saludo from '../saludo/Saludo';
import './Autenticacion.css';

function BotonInicio(props) {
    return (
      <button onClick={props.onClick}>
        Ingresar
      </button>
    );
  }
  
  function BotonCierreSesion(props) {
    return (
      <button onClick={props.onClick}>
        Cerrar Sesión
      </button>
    );
  }

class Autenticacion extends React.Component {
      constructor(props) {
        super(props);
        this.ejecutarInicioClick = this.ejecutarInicioClick.bind(this);
        this.ejecutarCierreSesiónClick = this.ejecutarCierreSesiónClick.bind(this);
        this.state = {estaAutenticado: false};
      }
      ejecutarInicioClick() {
        this.setState({estaAutenticado: true});
      }
      ejecutarCierreSesiónClick() {
        this.setState({estaAutenticado: false});
      }
      render() {
        const estaAutenticado = this.state.estaAutenticado;
        let boton;
        if (estaAutenticado) {
            boton = <BotonCierreSesion onClick={this.ejecutarCierreSesiónClick} />;
        } else {
            boton = <BotonInicio onClick={this.ejecutarInicioClick} />;
        }
        return (
          <div>
            <Saludo estaAutenticado={estaAutenticado} nombre={this.props.nombre}/>
            {boton}
          </div>
        );
      }  
}

export default Autenticacion;