import DescripcionPersonal from '../descripcionPersonal/DescripcionPersonal';
import './ArtDescripcionPersonal.css';

function ArtDescripcionPersonal(props) {
    return (
        <div>
            <div className='artDescripcionPersonal-principal'>
                <p className='p-about'>ABOUT</p>
                <img src={props.urlImagenPerfil} className='imagen-perfil' alt='Imagen Perfil'></img>
            </div>
            <div>
                <DescripcionPersonal />
            </div>
        </div>
    );
}

export default ArtDescripcionPersonal;