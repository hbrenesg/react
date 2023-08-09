import React from 'react';
import './Reloj.css';

// function Reloj(props) {
//     return (
//         <div>
//             <h1>Reloj:</h1>
//             <p>Tiempo Actual: {props.fecha.toLocaleTimeString()}</p>
//         </div>
//     );
// }

class Reloj extends React.Component {
    constructor(props) {
        super(props);
        //Se define el estado del componente, estado que algo va a variar, cambia.
        this.state = { fecha: new Date(), fechaFinal: new Date() };
    }

    //Método de montaje, se ejecuta después del render
    componentDidMount() {
        this.timerID = setInterval(
            () => this.Iteracion(),
            this.props.segundos
        );
    }

    Iteracion() {
        //Método para modifiacar un atributo estado
        this.setState({
            fecha: new Date()
        });

        this.setState({
            fechaFinal: new Date()
        });
    }

    //Desmontaje, eliminar lo que se puso en el montaje
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Reloj: {this.props.nombre}</h1>
                {/* <p>Tiempo Actual: {this.props.fecha.toLocaleTimeString()}</p> */}
                <p>Tiempo Actual: {this.state.fecha.toLocaleTimeString()}</p>
            </div >
        );
    }

}

export default Reloj;