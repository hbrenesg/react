import React from 'react';
import './DescripcionPersonal.css';
import actualizarMouseEncima from '../../redux/store/MouseEncima/action';
import { connect } from 'react-redux';
import { selectActiveMouseEncima } from '../../redux/store/MouseEncima/reducer';

const DescripcionPersonal = ({ mouseEncima, actualizarMouseEncima }) => {
    const onButtonClick = () => {
        actualizarMouseEncima(mouseEncima);
    }
    if (mouseEncima) {
        return (
            <div>
                <button onClick={onButtonClick} className='button-DescripcionPersonal'>Less Information</button>
                <p className='p-DescripcionPersonal'>I worked in an informatic system and the project to migrate Gupta code to C# from all areas of the core that contain different modules of the company,
                    this helped me to learn about technologies, process and the logic of the business, also the ability to share and increase my knowledge from others points of view.</p>
            </div>
        );
    } else {
        return (
            <button onClick={onButtonClick} className='button-DescripcionPersonal'>More Information</button>
        );
    }

}

const mapStateToProps = state => {
    return {
        mouseEncima: selectActiveMouseEncima(state)
    }
}

export default connect(mapStateToProps, { actualizarMouseEncima })(DescripcionPersonal);
