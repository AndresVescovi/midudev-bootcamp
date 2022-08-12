import './App.css';
import React, { useEffect, useState } from 'react';
import { Note } from './Note'


function App() {
const [notes, setNotes] = useState([])
const [newNote, setNewNote] = useState('')

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    setNotes(json)
  })

}, [])


const handleChange = (event)=>{
  setNewNote (event.target.value)
}
const handleSubmit = (event)=>{
  event.preventDefault()
  console.log('crear notas')
  const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
      important: Math.random < 0.5
  }
  console.log(noteToAddToState)
 
  setNotes(notes.concat(noteToAddToState))
}

  return( 
 <div>
  <h1>Notes</h1>
  <ol>
  {  notes.map((note)=>(
      <Note key={note.id} {...note}
       />/*forma manual
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul> */
    ))}
  </ol>
  <form onSubmit={handleSubmit}>
    <input type='text'  onChange={handleChange} value={newNote}/>
    <button >crear notas</button>
  </form>
</div>   
  )
}

export default App;
