import React from "react";
import "../index"

export default function AddNote({handleAddNote,darkMode}){
    const [noteText,setNoteText] = React.useState('')

    function handleChange(event){
            setNoteText(event.target.value)
    }

    function handleSave(){
        if(noteText.length > 0){
            handleAddNote(noteText)
        }
    }

    return(
        <div className='form-style'>
            <textarea type="text" 
                      className="note-text" 
                      id='notes-text' 
                      value={noteText} 
                      onChange={handleChange}
                      placeholder="Add a note..."
                      maxLength={250}/>
            <br></br>
            <button className={darkMode ? "darkApp form-button": "lightApp form-button"} onClick={handleSave}>Save</button>
         </div>
    )
}