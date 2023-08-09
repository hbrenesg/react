import React from 'react';
import './SiguienteContexto.css';
import Contexto from '../contexto/Contexto';

class SiguienteContexto extends React.Component{
    constructor(props){
        super(props);

        // this.filtro = this.filtro.bind(this);
    }

    filtro = (event) => {
        alert(this.props.lista + " " + event.target.value);
    }

    render(){
        return (
            <div>
                {/* <Contexto filtro={this.filtro.bind(this)} lista="Componente Contexto"/>
             */}
                <Contexto filtro={this.filtro} lista="Componente Contexto"/>
            </div>
        );
    }
}

export default SiguienteContexto;