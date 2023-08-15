import React from "react";
import './ComponenteExperienciaLink.css';

class ComponenteExperienciaLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className='a-LinkEmpresa' href={this.props.linkEmpresa} target="_blank">{this.props.descripcionLink}</a>
        );
    }
}


export default ComponenteExperienciaLink;