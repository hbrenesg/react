// import logo from './logo.svg';
import MenuEncabezado from '../menuEncabezado/MenuEncabezado';
import './Encabezado.css';

function Encabezado(props) {
    return (
        <div className='div-principal'>
            <img src={props.urlImagenLogo} className='logo-proyecto-react' alt='Imagen Logo'></img>
            <MenuEncabezado />
        </div>
    );
}

export default Encabezado;
