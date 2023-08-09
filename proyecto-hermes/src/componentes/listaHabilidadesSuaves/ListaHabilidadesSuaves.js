import React from "react";
import './ListaHabilidadesSuaves.css';
import Habilidad from "../habilidad/Habilidad";

function ListaHabilidadesSuaves(props) {
    const listaHabilidades = props.habilidades.map((habilidad) => <Habilidad key={habilidad.id.toString()} valor={habilidad} />);

    return (
        <div>
            <h4>SOFT SKILLS</h4>
            <ul>
                {listaHabilidades}
            </ul>
        </div>
    );
}

export default ListaHabilidadesSuaves;