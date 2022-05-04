import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import './index.css'


export default function NoteList({notes,handleAddNote,handleDelete}){

    return(
        <div>
            <div className="add-note"><AddNote handleAddNote={handleAddNote} /></div>
            <div className="single-notes">
                {notes.slice(0).reverse().map(a => 
                 <Note noteObj={a} handleDelete={handleDelete}/>
                )}
            </div>
        </div>
    )
}