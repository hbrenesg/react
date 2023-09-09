import React from "react";
import './Habilidad.css';

function Habilidad(props) {
    return <li className='li-habilidad'>{props.valor.descripcion}</li >
}

export default Habilidad;