import React from "react";
import './ComponenteExperienciaImagen.css';

class ComponenteExperienciaImagen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.urlImagenEmpresa} className='img-componente-experencia-imagen' alt='Imagen Empresa' ></img>
        );
    }
}

export default ComponenteExperienciaImagen;