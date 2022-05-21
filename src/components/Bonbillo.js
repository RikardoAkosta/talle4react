import React from 'react';


const Bonbillo = ({isOn, changeIsOn}) => {

  
    return (
        <div className='App'>
            <div className="bulb" 
                style ={ { background:  isOn ? "yellow" : "red"}}>
            </div>
            <button onClick={changeIsOn}>{isOn ? "on" : "off"}</button>
            
        </div>
    );
};

export default Bonbillo; 