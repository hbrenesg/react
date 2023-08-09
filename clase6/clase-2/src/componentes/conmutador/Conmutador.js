import React from 'react';
import './Conmutador.css';

class Conmutador extends React.Component{
    constructor(props){
        super(props);
        this.state = {estaActivo: true};

        this.manejarClick = this.manejarClick.bind(this);
    }

    manejarClick(){
        this.setState(
            state => ({
                estaActivo: !state.estaActivo
            })
        );
    }

    render(){
        return (
            <div>
                <button onClick={this.manejarClick}>{this.state.estaActivo ? 'Encendido' : 'Apagado'}</button>
            </div>
        );
    }


}

export default Conmutador;