
import {useState} from 'react';
import './App.css';
import Mensaje from './components/Mensaje';
import Contraseña from './components/Contraseña';
import Bombillo from './components/Bombillo';

function App() {


  const [counter, setCounter] = useState(0);/* 0 es el valor desde donde queremos que parta,podria ser cualquier numero  */

  /* let counter = 8; :esta seria la forma en vanilla js*/
  
  const increment = () => {
    setCounter(counter + 1);/* debe ser counter + 1 porque si ponemos counter++ estamos modificando el estado lo que se quiere es tener el estado counter y sumar 1 */
    /* counter = counter + 1;  :esta seria la forma en vanilla js */
  }
  const decrement = () => setCounter(counter - 1);

/* aqui vamos a poner la funcionalidad del componente bonbiñño */
  const [isOn, setIsOn] = useState(false);
  const changeIsOn = () => setIsOn(!isOn);
  



  return (
  <>
    <div className="App">
      <h2>{counter }</h2>
      <button onClick= {decrement}>
        Decrementar
      </button>
      <button onClick= {increment}>
        Incrementar
      </button>
    </div>
      <br />
    <div>
      <Mensaje />
    <br />
      <Contraseña />
    <br />
      <Bombillo isOn={isOn} changeIsOn={changeIsOn} />
      <br />
      <Bombillo isOn={isOn} changeIsOn={changeIsOn}/>
      <br />
      <Bonbillo isOn={isOn} changeIsOn={changeIsOn}/>
      <br />
      <Bombillo isOn={isOn} changeIsOn={changeIsOn}/>
      <br />
    </div>
  </>
  );
   
}

export default App;
