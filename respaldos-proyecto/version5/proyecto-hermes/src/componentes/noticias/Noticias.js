import React from 'react';
import './Noticias.css';

class Noticias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            estaCargado: false,
            elementos: []
        };
    }

    componentDidMount() {
        // const url = 'https://google-news-api1.p.rapidapi.com/search?language=EN';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'b5de193938msh7a70a47a0cf9f21p14ca8cjsndee7c6b91984',
        //         'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
        //     }
        // };

        // try {
        //     const response = fetch(url, options);
        //     const result = response.json();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
        fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=jIvEQuhemaAE3AzTioOkmQvDHP9zM4Yi")
            .then(respuesta => respuesta.json())
            .then(
                (resultado) => {
                    this.setState({
                        error: null,
                        estaCargado: true,
                        elementos: resultado.results
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
            return <div className='noticias-principal'>
                <p className='p-news'>NEWS</p>
                Se encontró el siguiente error: {error.message}
            </div>;
        } else if (!estaCargado) {
            return <div className='noticias-principal'>
                <p className='p-news'>NEWS</p>
                Cargando los datos...
            </div>;
        } else {
            return (
                <div className='noticias-principal'>
                    <p className='p-news'>NEWS</p>
                    <ul className='ul-news'>
                        <div className='divNoticias-news'>
                            {elementos.map(elemento => (
                                <div className='div-news'>
                                    <li key={elemento.id.toString()} className='li-news'>
                                        <a href={elemento.url} className='a-news' target="_blank">{elemento.title}</a>
                                        <br />
                                        {elemento.abstract}
                                    </li>
                                </div>
                            ))}
                        </div>
                    </ul>
                </div>
            );
        }
    }
}

export default Noticias;
