
import {useState} from 'react';
import './App.css';
import Mensaje from './components/Mensaje';
import Contraseña from './components/Contraseña';
import Bombillo from './components/Bombillo';





function App() {

   /* desde aqui vamos a empezara usar useEffect  el cual se puede importar en la misma linea de codigo que usestate */
   const colors = ["#845EC2", "#B39CD0", "#FBEAFF", "#00C9A7", "#C4FCEF"];//para buscar colores esta la pagina mycolor.space crea una buena ppaleta de colores
 
   document.body.style = `background: ${colors[Math.floor(Math.random() * colors.length)]}`;

   

  const [counter, setCounter] = useState(0);/* 0 es el valor desde donde queremos que parta,podria ser cualquier numero  */

  /* let counter = 8; :esta seria la forma en vanilla js*/
  
  /* const increment = () => {
    setCounter(counter + 1);/* debe ser counter + 1 porque si ponemos counter++ estamos modificando el estado lo que se quiere es tener el estado counter y sumar 1 */
    /* counter = counter + 1;  :esta seria la forma en vanilla js */
  
  /* const decrement = () => setCounter(counter - 1); */
  //la parte anterior comentada desde donde empieza el lef es las diferentes fomas de hacer que funcione el copntador pero lo que sigue es la parte definitiva y va a estar en el return



 

/* aqui vamos a poner la funcionalidad del componente bonbiñño */
  const [isOn, setIsOn] = useState(false);
  const changeIsOn = () => setIsOn(!isOn);
  



  return (
  <>
    <div className="App">
      <h2>{counter}</h2>
      <button onClick= {() => setCounter(counter -1)}>
        Decrementar
      </button>
      <button onClick= {()=> setCounter(counter + 1)}>
        Incrementar
      </button>
    </div>
     
    <div>
      <Mensaje />
        <br />
      <Contraseña />
        <br />
      <Bombillo isOn={isOn} changeIsOn={changeIsOn} />
        <br />
      <Bombillo isOn={isOn} changeIsOn={changeIsOn}/>
        <br />
      <Bombillo isOn={isOn} changeIsOn={changeIsOn}/>
        <br />
      <Bombillo isOn={isOn} changeIsOn={changeIsOn}/>
      
    </div>
  </>
  );
   
}

export default App;
