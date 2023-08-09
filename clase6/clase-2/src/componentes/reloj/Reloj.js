import React from 'react';
import './Reloj.css';

// function Reloj(props){
//     return (
//         <div>
//             <h1>Reloj:</h1>
//             <p>Tiempo Actual: {props.fecha.toLocaleTimeString()}</p>
//         </div>
//     );
// }

class Reloj extends React.Component{   
    constructor(props){
        super(props);
        // this.state = {fecha: this.props.fechab}
        this.state = {fecha: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.Iteración(),
            1000 
        );
    }

    Iteración(){
        this.setState({
            fecha: new Date()
        });

    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return (
            <div>
                <h1>Reloj de {this.props.nombre}:</h1>
                <p>Tiempo Actual: {this.state.fecha.toLocaleTimeString()}</p>                           
            </div>
        );
    }    
}


export default Reloj;