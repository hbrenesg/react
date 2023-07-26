import React from 'react';
import Saludo from '../saludo/Saludo';
import './OperadorCondicional.css';

class OperadorCondicional extends React.Component {
    constructor(props) {
        super(props);
        this.state = { estaAutenticado: true };
    }
    render() {
        const estaAutenticado = this.state.estaAutenticado;
        return (
            <div>
                <h1>Expresión Pequeña</h1>
                Usuario <b>{estaAutenticado ? 'actualmente' : 'no'}</b> autenticado!
                <h1>Expresión Grande</h1>
                {estaAutenticado ? (
                    <Saludo estaAutenticado={this.state.estaAutenticado} nombre="José" />
                ) : (
                    <Saludo estaAutenticado={this.state.estaAutenticado} nombre="José" />
                )}

            </div>
        );
    }
}

export default OperadorCondicional;
