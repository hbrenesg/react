import React  from "react";
import './Listado.css';

class Listado extends React.Component{
    constructor(props){
        super(props);
         this.state = {cantidad: this.props.cant
        };

        this.elements = [];

        for(let j = 0; j < this.state.cantidad; j++)
        {
            this.elements.push(<div><button onClick={this.eliminarFila.bind(this, j)}>Eliminar Fila {j+1} Posición {j}</button><br/></div>);
        }

        // this.eliminarFila = this.eliminarFila.bind(this);
    }

    eliminarFila(j, e){
        alert(j);
    }

    render(){
        return (
            <div>
                <h1>Ejemplo Envío de Parámetros a Manejadores de Eventos React:</h1>
                {this.elements}

            </div>
        );
    }

}

export default Listado;