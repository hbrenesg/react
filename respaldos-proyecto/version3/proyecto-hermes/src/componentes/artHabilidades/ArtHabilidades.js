import ListaHabilidadesDuras from '../listaHabilidadesDuras/ListaHabilidadesDuras';
import ListaHabilidadesSuaves from '../listaHabilidadesSuaves/ListaHabilidadesSuaves';
import './ArtHabilidades.css';

function ArtHabilidades() {
    return (
        <div>
            <p className='p-skills'>SKILLS</p>
            <div className='artHabilidades-principal'>
                <ListaHabilidadesDuras habilidades={[{ id: 1, descripcion: 'C#' },
                { id: 2, descripcion: 'Java' },
                { id: 3, descripcion: 'Python' },
                { id: 4, descripcion: 'HTML5' },
                { id: 5, descripcion: 'CSS' },
                { id: 6, descripcion: 'JavaScript' },
                { id: 7, descripcion: 'MySQL' },
                { id: 8, descripcion: 'SQL Server' }]} />
                <ListaHabilidadesSuaves habilidades={[{ id: 1, descripcion: 'Teamwork' },
                { id: 2, descripcion: 'Good Communication' },
                { id: 3, descripcion: 'Collaboration' },
                { id: 4, descripcion: 'Adaptability' },
                { id: 5, descripcion: 'Problem-solving' }]} />
            </div>
        </div>
    );
}

export default ArtHabilidades;
