import React from "react";
import './index.css'


export default function AddNote({handleAddNote}){
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
                      placeholder="Add a task..."
                      maxLength={75}
                      wrap="off"/>
            <br></br>
            <button className="save-button" onClick={handleSave}>Add</button>
         </div>
    )
}