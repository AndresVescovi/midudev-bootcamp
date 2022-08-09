import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

/* incrementar = () =>{
  console.log("click")
} */

const Counter = ({contador})=>{
 return <h1> {contador} </h1>
}

const App = (props) => {

  const [contador, setContador] = useState(0)
  
  console.log("render")

const handleClick = (value)=>{
value? setContador(contador + 1) : setContador(contador - 1)
}

/* const handleClickAdd = () =>{
  setContador(contador + 1)
}
const handleClickSubtract = () =>{
  setContador(contador - 1)
} */
const handleClickRestart = () =>{
  setContador(0)
}


const isEven = contador % 2 === 0

/* const isEven = () =>{
  let even = contador % 2
  if(even === 0){
    return "el contador es par"
  }else{
    return "el contador es impar"
  }
} */

  return (
    <div>
    <p>El valor del contador es:</p>
    <Counter contador={contador}/>
    <p>{isEven? 'Es par': 'Es impar'}</p>
    <button onClick={()=> handleClick(true)}>incrementar</button>
    <button onClick={handleClickRestart}>resetear</button>
    <button onClick={()=>handleClick(false)}>disminuir</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);





