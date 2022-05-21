import React from 'react';
import { useState } from 'react';

const Contraseña = () => {

    const [isVisible, setIsVisible] = useState(false);

    const changeVisible = () => setIsVisible(!isVisible);

    return (
        <div className='App'>
            <h1>Escribe tu contraseña</h1>
            <input type= {isVisible ? "text" : "password"} />{/* si ponemos la palabra text en vez de password podemos ver los caracteres podrmos poner condicionales terciarios */}
            <button onClick={changeVisible}> {isVisible ? 'Ocultar' : 'Mostrar'}</button>
        </div>
    );
};

export default Contraseña;