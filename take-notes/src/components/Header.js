import React from 'react'
import '../index.css'

export default function Header({darkMode,onClickHandler}){
    return(
        <div className={darkMode ? "darkApp title": "lightApp title"}>
            <h1>Take Notes</h1>
            <div className='toggle-b'>
                <p><span>{darkMode ? "Light " : "Dark "}</span>Mode </p>
                <label className="switch" >
                    <input type="checkbox" onClick={onClickHandler}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}