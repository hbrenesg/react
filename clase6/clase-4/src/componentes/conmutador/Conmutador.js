import React from 'react';
import './Conmutador.css';

class Conmutador extends React.Component {
    constructor(props) {
        super(props);
        this.state = { estaActivo: true };

        //Definir el contexto de this
        this.manejarClick = this.manejarClick.bind(this);
    }

    manejarClick() {
        this.setState(
            state => ({
                estaActivo: !state.estaActivo
            })
        );
    }

    manejadorCambiosTexto() {

    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.manejadorCambiosTexto} value=""></input>
                <button onClick={this.manejarClick}>{this.state.estaActivo ? 'Encendido' : 'Apagado'}</button>
            </div>
        );
    }
}

export default Conmutador;