import './PiePagina.css';

function PiePagina(props) {
    return (
        <footer className='piePagina-principal'>
            <img src={props.urlImagenIcono} className='icono-proyecto-react' alt='Imagen Icono'></img>
            <p>Slogan: Crear código simple y de calidad.</p>
        </footer>
    );
}

export default PiePagina;