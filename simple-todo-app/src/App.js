import './index.css';
import React from 'react';
import Particles from 'particlesjs';
import {nanoid} from 'nanoid'
import NoteList from './components/TodoComponents/NoteList';

function App() {
  
  window.onload = function() {
    Particles.init({
      selector: '.background',
      color: "#f1faee",
      connectParticles: true,
      maxParticles: 100,
      
      // responsive options

      responsive: [
        {
          breakpoint: 768,
          options:{
            maxParticles: 50,
            connectParticles:false
          }
        },{
          breakpoint: 425,
          options:{
            maxParticles: 25,
            connectParticles:false
          }
        },{
          breakpoint: 320,
          options:{
            maxParticles: 0,
          }
        }
      ]

    })
  }

  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) 
        || [{
          note:"sample note",
          id: nanoid()
          }
        ])
  
  function addNote(text){
    const newNote = {note:text,id:nanoid()}
    const newNotes = prev => [...prev,newNote]
    setNotes(newNotes)
  }

  function deleteItem(id){
    const newList = notes.filter(a => a.id !== id)
    setNotes(newList)
  }

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <div className='main-container'>
      <div className='todo-container'>
        <NoteList notes={notes} handleAddNote={addNote} handleDelete={deleteItem}/>
      </div>
    </div>
  );
  
}

export default App;
