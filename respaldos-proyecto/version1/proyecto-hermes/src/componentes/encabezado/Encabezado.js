// import logo from './logo.svg';
import './Encabezado.css';

function Encabezado(props) {
    return (
        <div className='encabezado-principal'>
            <img src={props.urlImagenLogo} className='logo-proyecto-react' alt='Imagen Logo'></img>
            <div className='boton-contacto'>Contacto</div>
        </div>
    );
}

export default Encabezado;
