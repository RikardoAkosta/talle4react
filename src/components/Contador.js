import React from 'react';
import {useState, useEffect} from 'react';

const Contador = () => {

    const [counter3, setCounter3] = useState(0)
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const colors = ["#845EC2", "#B39CD0", "#FBEAFF", "#00C9A7", "#C4FCEF"];//para buscar colores esta la pagina mycolor.space crea una buena ppaleta de colores
        document.body.style = `background: ${colors[Math.floor(Math.random() * colors.length)]}`;/* aqui le decimos que cuando se ejecute el useEffect se ejecute solo una vez */
      }, [ counter3 ]);


    return (
    <div className="App">
      <h2>{counter3}</h2>
      <button onClick= {() => setCounter3(counter3 -1)}>
        Decrementar
      </button>
      <button onClick= {()=> setCounter3(counter3 + 1)}>
        Incrementar 
      </button>
      <div>
        <input type={isVisible ? "text" : "password"} />
        <button onClick={() => setIsVisible(!isVisible)}>Show / hidde</button>
      </div>
    </div>
    );
};

export default Contador;