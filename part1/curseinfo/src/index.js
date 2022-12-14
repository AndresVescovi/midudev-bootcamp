import React from 'react'
import ReactDOM from 'react-dom'

const Header =({course})=>{
 return <h2>{course}</h2>
}
const Content = (props) =>{
  return(<div>
    <h3>{props.part[0]} {props.exercises[0]}</h3>
    <h3>{props.part[1]} {props.exercises[1]}</h3>   
    <h3>{props.part[2]} {props.exercises[2]}</h3> 
        </div>
        )
}
const Total = (props) =>{
  return(<p>{props.msj}</p>)
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      
       <Content  part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      
      <Total msj={`Number of exercises ${exercises1 +exercises2 + exercises3}`}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))



