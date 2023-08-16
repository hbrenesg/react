import React from 'react';
import './ListadoPOST.css';

class ListadoPOST extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            estaCargado: false,
            elementos: []
        };
    }

    componentDidMount() {

        //const usuario = { name: 'José', username: 'joscxcxeuser', email: 'jose@correo.com' };

        const usuarioactualizado = { name: 'José', username: 'joseuserupdate', email: 'jose@correo.com' };

        // fetch("https://jsonplaceholder.typicode.com/users",
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(usuario),
        //     })
        // fetch("https://jsonplaceholder.typicode.com/users/5",
        //     {
        //         method: 'DELETE',
        //     })
        // fetch("https://jsonplaceholder.typicode.com/users/6",
        //     {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(usuarioactualizado),
        //     })
        fetch("https://jsonplaceholder.typicode.com/users/7",
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: "Marco" }),
            })
            .then(respuesta => respuesta.json())
            .then(
                (resultado) => {

                    console.log(resultado);

                    var nuevalista = [];
                    nuevalista.push(resultado);

                    this.setState({
                        error: null,
                        estaCargado: true,
                        elementos: nuevalista
                    });
                },
                // Manejo de errores
                (errores) => {
                    this.setState({
                        error: errores,
                        estaCargado: true,
                        elementos: []
                    });
                }
            )
    }

    render() {
        const { error, estaCargado, elementos } = this.state;
        if (error) {
            return <div>Se encontró el siguiente error: {error.message}</div>;
        } else if (!estaCargado) {
            return <div>Cargando los datos...</div>;
        } else {
            return (
                <ul>
                    {elementos.map(elemento => (
                        <li key={elemento.id}>
                            {elemento.id} {elemento.name} {elemento.username} {elemento.email}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default ListadoPOST;
