import React from 'react';
import './ComponenteExperiencia.css';
import ComponenteExperienciaImagen from '../componenteExperienciaImagen/ComponenteExperienciaImagen';
import ComponenteExperienciaLink from '../componenteExperienciaLink/ComponenteExperienciaLink';

class ComponenteExperiencia extends React.Component {
    constructor(props) {
        super(props);
        this.mouseEncima = false;
        this.state = { mouseEncima: false };
        this.manejadorEventoMouse = this.manejadorEventoMouse.bind(this);
        // this.mayorInformacionBtn = this.mayorInformacionBtn.bind(this);
    }

    manejadorEventoMouse() {
        this.setState(
            state => ({
                mouseEncima: !state.mouseEncima
            })
        );
    }

    // mayorInformacionBtn() {
    // }

    render() {
        let componenteAMostrar;
        if (this.state.mouseEncima) {
            componenteAMostrar = <div onMouseOut={this.manejadorEventoMouse} className='div-ComponenteAMostrar'>
                <ComponenteExperienciaLink linkEmpresa={this.props.linkEmpresa} descripcionLink={this.props.descripcionLink} />
                {/* <button onClick={this.mayorInformacionBtn}>MORE INFO</button> */}
            </div>

        } else {
            componenteAMostrar = <div onMouseOver={this.manejadorEventoMouse} className='div-ComponenteAMostrar'>
                <ComponenteExperienciaImagen urlImagenEmpresa={this.props.urlImagenEmpresa}></ComponenteExperienciaImagen>
            </div>
        }

        return (
            <div>
                {componenteAMostrar}
            </div>
        );
    }
}

export default ComponenteExperiencia;