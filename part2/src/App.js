import './App.css';
import { useEffect, useState } from 'react';
import { Note } from './Note'
import {create as createNote, getAll as getAllNotes} from './servicios/notes/index'

function App() {
const [notes, setNotes] = useState([])
const [newNote, setNewNote] = useState('')

useEffect(() => {
getAllNotes().then((note) => {
  setNotes(notes)
})
}, [])


const handleChange = (event)=>{
  setNewNote (event.target.value)
}
const handleSubmit = (event)=>{
  event.preventDefault()

  console.log('crear notas')
const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
  }

createNote(noteToAddToState)
  .then(newNote => {
    setNotes((prevNotes => prevNotes.concat(newNote)))
  })



  
 
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
