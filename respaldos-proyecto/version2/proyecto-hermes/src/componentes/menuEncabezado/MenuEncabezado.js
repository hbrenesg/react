import './MenuEncabezado.css';

function MenuEncabezado(props) {
    return (
        <div className='div-links'>
            <ul className='ul-links'>
                <li className='li-link'>
                    <a href='./' className='a-link'>HOME</a>
                </li>
                <li className='li-link'>
                    <a href='./' className='a-link'>ABOUT</a>
                </li>
                <li className='li-link'>
                    <a href='./' className='a-link'>SKILLS</a>
                </li>
                <li className='li-link'>
                    <a href='./' className='a-link'>EXPERIENCE</a>
                </li>
                <li className='li-link'>
                    <a href='./' className='a-link'>TESTIMONIALS</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuEncabezado;