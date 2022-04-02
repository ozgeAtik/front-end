import React from "react";

export default function PasswordGenerate({password,handleClick}){

    return(
        <>
            <div className="password-box">
                <h1>{password}</h1>
            </div>
            <button className="generate-button" onClick={handleClick}>generate!</button>
        </>
    )
}