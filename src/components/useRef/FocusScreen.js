import React, { useRef } from 'react'

export const FocusScreen = () => {
    //Use ref se usa para mantener una referencia mutable
    const inputRef = useRef();
    // console.log(inputRef);

    const handleClick=()=> {
        // document.querySelector('input').focus();
        /*document.querySelector('input').select(); //no solo enfoca , si no que también selecciona texto*/
        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <div>
            <h2>Use Ref focus screen</h2>

            <hr/>
            <input
            ref = {inputRef}
            className = "form-control"
            placeholder = " Su nombre"
            />
            <button
            className = "btn btn-outline-primary mt-4"
            onClick = {handleClick}
            >Focus</button>
        </div>
    )
}
