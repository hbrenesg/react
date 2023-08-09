import React from "react";
import './ListaHabilidadesDuras.css';
import Habilidad from "../habilidad/Habilidad";

function ListaHabilidadesDuras(props) {
    const listaHabilidades = props.habilidades.map((habilidad) => <Habilidad key={habilidad.id.toString()} valor={habilidad} />);

    return (
        <div>
            <h4>Technologies</h4>
            <ul>
                {listaHabilidades}
            </ul>
        </div>
    );
}

export default ListaHabilidadesDuras;