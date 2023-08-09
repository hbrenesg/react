import React from "react";
import './Listado.css';

class Listado extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cant: this.props.cant };

        this.elements = [];

        for (let index = 0; index < 5; index++) {
            this.elements.push(<div><button onClick={this.eliminarFila.bind(this, index)}>Eliminar Fila {index + 1}</button><br></br></div>);
        }

        this.eliminarFila = this.eliminarFila.bind(this);
    }

    eliminarFila(j, e) {
        alert(j);
    }

    render() {
        return (
            <div>
                <h1>Ejmeplo Envío de Parámetros a Manejadores de Eventos React:</h1>
                {this.elements};
            </div>
        );
    }
}

export default Listado;