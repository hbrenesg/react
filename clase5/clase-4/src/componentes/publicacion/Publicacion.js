import React from 'react';
import '../publicacion/Publicacion.css';
import Encabezado from '../encabezado/Encabezado';

function Publicacion(props) {
    return (
        <div>
            <Encabezado titulo="Publicación" autor={props.autor} />
            <div className='Contenido'>
                {props.texto}
            </div>
            <div className='Pie'>
                {props.fecha}
            </div>
        </div>
    );
}


export default Publicacion;