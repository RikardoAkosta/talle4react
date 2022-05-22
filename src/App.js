
import {useState, useEffect} from 'react';
import './App.css';
import Mensaje from './components/Mensaje';
import Contraseña from './components/Contraseña';
import Bombillo from './components/Bombillo';
import Contador from './components/Contador';





function App() {

   
   
   

  const [counter, setCounter] = useState(0);/* 0 es el valor desde donde queremos que parta,podria ser cualquier numero  */
  const [counter2, setCounter2] = useState(0);

  /* let counter = 8; :esta seria la forma en vanilla js*/
  
  /* const increment = () => {
    setCounter(counter + 1);/* debe ser counter + 1 porque si ponemos counter++ estamos modificando el estado lo que se quiere es tener el estado counter y sumar 1 */
    /* counter = counter + 1;  :esta seria la forma en vanilla js */
  
  /* const decrement = () => setCounter(counter - 1); */
  //la parte anterior comentada desde donde empieza el lef es las diferentes fomas de hacer que funcione el copntador pero lo que sigue es la parte definitiva y va a estar en el return



  /* desde aqui vamos a empezara usar useEffect  el cual se puede importar en la misma linea de codigo que usestate */

  useEffect(() => {
    const colors = ["#845EC2", "#B39CD0", "#FBEAFF", "#00C9A7", "#C4FCEF"];//para buscar colores esta la pagina mycolor.space crea una buena ppaleta de colores
    document.body.style = `background: ${colors[Math.floor(Math.random() * colors.length)]}`;/* aqui le decimos que cuando se ejecute el useEffect se ejecute solo una vez */
  }, [ counter2 ]);


  //console.log("limbo") //si damos clic a los botones limbo y va a ocupar mucha memoria por eso se usa el useEffect
 

/* aqui vamos a poner la funcionalidad del componente bombillo */
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
    <br />
    <div className="App">
      <h2>{counter2}</h2>
      <button onClick= {() => setCounter2(counter2 -1)}>
        Decrementar
      </button>
      <button onClick= {()=> setCounter2(counter2 + 1)}>
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
        <br />
      <Contador />
    
      
    </div>
  </>
  );
   
}

export default App;
