import React from 'react';
import './Contexto.css';

class Contexto extends React.Component{

    render(){
        let {filtro} = this.props;
        return (
            <div>
                <h1>Ejemplo Contexto "this"</h1>
                {/* <input onChange={filtro.bind(this)} /> */}
                <input onChange={filtro} />
            </div>
        );
    }

}

export default Contexto;




