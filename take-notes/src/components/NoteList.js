import React from "react";
import '../index.css'
import Note from "./Note";
import AddNote from "./AddNote";

export default function NoteList({notes,handleAddNote,darkMode,handleDelete}){

    return(
        <div className="notes-list">
            <div className="column c1">
                {notes.map(a => 
                 <Note noteObj={a} handleDelete={handleDelete}/>
                )}
            </div>
            <div className="column c2"><AddNote handleAddNote={handleAddNote} darkMode={darkMode} /></div>
            <div className="column c3"></div>
        </div>
    )
}