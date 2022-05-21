import React from 'react';
import { useState } from 'react';

const Mensaje = () => {


    const [text, setText] = useState('Hola Mundo');
    const changeText = () =>  setText('Adios mundo el estado cambio ');/* como es una sola linea no usamos {} si tuviense mas instrucciones si se haria */

    return (
        <div className='App'>
            <h2>{text}</h2>
            <button onClick={changeText}>Cambiar mensaje</button>
        </div>
    );
};

export default Mensaje;