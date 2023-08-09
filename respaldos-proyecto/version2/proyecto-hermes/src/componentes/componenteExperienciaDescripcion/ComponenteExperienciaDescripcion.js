import React from "react";
import './ComponenteExperienciaDescripcion.css';

class ComponenteExperienciaDescripcion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <p className="p-descripcion-experiencia">{this.props.descripcionExperiencia}</p>
            </div>
        );
    }
}


export default ComponenteExperienciaDescripcion;