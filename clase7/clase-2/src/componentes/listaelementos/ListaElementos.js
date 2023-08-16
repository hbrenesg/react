import React from 'react';
import './ListaElementos.css';

function Elemento(props) {
    return <li>Elemento {props.valor}</li >
}

export default function ListaElementos(props) {
    const enteros = props.enteros;
    const listaElementos = enteros.map((entero) => <Elemento key={entero.toString()} valor={entero} />);

    const listaElementosSecundarios = enteros.map((entero) => <Elemento key={entero.toString()} valor={entero} />);

    return (
        <div>
            <h2>Lista 1</h2>
            <ul>
                {listaElementos}
            </ul>
            <h2>Lista 2</h2>
            <ul>
                {listaElementosSecundarios}
            </ul>
        </div>
    );
}