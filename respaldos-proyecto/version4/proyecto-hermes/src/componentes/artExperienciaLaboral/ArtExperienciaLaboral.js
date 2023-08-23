import ComponenteExperiencia from '../componenteExperiencia/ComponenteExperiencia';
import ComponenteExperienciaDescripcion from '../componenteExperienciaDescripcion/ComponenteExperienciaDescripcion';
import './ArtExperienciaLaboral.css';

function ArtExperienciaLaboral() {
    return (
        <div>
            <p className='p-experience'>EXPERIENCE</p>
            <div className='div-componentes'>
                <ComponenteExperiencia urlImagenEmpresa='./img/logoSoftland.avif' linkEmpresa="https://softland.cr/" descripcionLink="SOFTLAND" />
                <ComponenteExperiencia urlImagenEmpresa='./img/logoDXC.jpeg' linkEmpresa="https://dxc.com/cr/es" descripcionLink="DXC" />
                <ComponenteExperiencia urlImagenEmpresa='./img/logoSoftland.avif' linkEmpresa="https://softland.cr/" descripcionLink="SOFTLAND" />
            </div>
            <div className="div-descripciones">
                <ComponenteExperienciaDescripcion id="1" descripcionExperiencia="Developer in different areas of the principal software, using technologies like C#, Visual Basic and others, 
                also make reports to find important information. Worked with different groups of people." />
                <ComponenteExperienciaDescripcion descripcionExperiencia="I have worked with Procter & Gamble account in SAP processes. And also, 
                I have worked in the module iTrade where I created different queries to obtain and modified information of the database in SQL Server, and interact, 
                understand the source code of this module which is developed in C#." />
                <ComponenteExperienciaDescripcion descripcionExperiencia="Work on the project to migrate Gupta code to C# from all areas of the core product software. 
                This has helped me to know the debugging process and the flow of the code" />
            </div>
        </div>
    );
}

export default ArtExperienciaLaboral;