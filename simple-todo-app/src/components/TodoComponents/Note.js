import React from "react";
import './index.css'
import {AiFillDelete} from 'react-icons/ai'

export default function Note({noteObj,handleDelete}){
    return(
        <>
            <div className="s-n">
                <span>{noteObj.note}<AiFillDelete onClick={() => handleDelete(noteObj.id)} className="d-icon" /></span>
                
            </div>
            <hr></hr>
        </>
    )
}