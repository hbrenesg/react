import React from 'react';
import './FormularioN.css';

class FormularioN extends React.Component {
    constructor(props) {
        super(props);
        this.ejecutarSubmit = this.ejecutarSubmit.bind(this);
        this.input = React.createRef();
    }

    ejecutarSubmit(event) {
        document.write('Se ha enviado el siguiente mensaje: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.ejecutarSubmit}>
                <label>
                    Mensaje:
                    {/* <input type="text" defaultValue="Ingrese el mensaje por favor" ref={this.input} /> */}
                    <input type="text" placeholder="Ingrese el mensaje por favor" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormularioN;