const { json } = require("express")
const express = require("express")

const app = express()

/* const http = require('http') */

 let notes = [
   { "id": 1,
    "content":"me tengo que cosinar",
    "date":"2022-08-19",
    "important" :true
    },
    { "id": 2,
    "content":"tengo que aprender js y node",
    "date":"2022-08-19",
    "important":true
    },
    { "id": 3,
    "content":"repasar node y js",
    "date":"2022-08-19",
    "important":false
    },
] 

/* const app = http.createServer((req, res)=>{
    res.writeHead(200, {'Contend-type': 'text/plain'})
    res.end(JSON.stringify(note))
})
 */

app.get('/', (req,res)=> {
    res.send('<h1>Hellow word</h1>')
})

app.get('/api/notes', (req,res) =>{
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) =>{
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
   
})
app.delete('/api/notes/:id', (req, res) =>{
    const id = Number(req.params.id)
   notes = notes.filter(note => note.id !== id )
   res.status(204).end()
   
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
