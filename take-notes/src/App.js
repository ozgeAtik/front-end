import './index.css';
import Header from './components/Header';
import React from 'react';
import NoteList from './components/NoteList';
import {nanoid} from 'nanoid'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function App() {

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [darkMode,setDarkMode] = React.useState(true)
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) 
        || [{
          note:"sample note",
          id: nanoid()
          }
        ])

  function darkModeToggle(){
      setDarkMode(prev =>!prev)
  }

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
    <div className={darkMode ? "darkApp": "lightApp"} style={{height: windowDimensions.height,width:windowDimensions.width}}>
      <Header darkMode={darkMode} onClickHandler={darkModeToggle} />
      <NoteList notes={notes} handleAddNote={addNote} darkMode={darkMode} handleDelete={deleteItem}/>
    </div>
  );
}

export default App;
