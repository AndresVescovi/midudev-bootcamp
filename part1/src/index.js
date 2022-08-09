import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css'

const   WarningNoUsed=()=>{
    return <h2>Todavia no se uso el contador</h2>
}
const ListOfCliks=({clicks})=>{
    return <p>{clicks.join(",")}</p>
}

const App = () => {
const [counters, setCounters] = useState({
    left: 0,
    rigth: 0,
    clicks: 0,
    mensaje: "mensaje por estado"
})
const [clicks, setClicks] = useState([])
  /*usar el spreade operator "..." hace a que
  que se recuperen todos los estados del objeto/array
  y que solo se cambien los detallados en la funcion*/
  
  const handleClickLeft = () =>{
    const newCountersState ={
        ...counters,
        left: counters.left +1,
        clicks: counters.clicks +1
    }
  setCounters(newCountersState)
  setClicks((prevClicks)=> [...prevClicks,"R"])
  }

  const handleClickRigth = () =>{
    const newCountersState ={
        ...counters,
        rigth: counters.left +1,
        clicks: counters.clicks +1
    }
    setCounters(newCountersState)
    setClicks((prevClicks)=> [...prevClicks,"R"])
  }


  return (
    <div>
        {counters.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRigth}>rigth</button>
        {counters.rigth} 
        <p>click totales {clicks.length}</p>
        {clicks.length === 0?(
            <WarningNoUsed/>
        ):(
            <ListOfCliks clicks={clicks}/>
        )}
        {counters.mensaje}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);