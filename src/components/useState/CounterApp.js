import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {
    const [state , setincrement] = useState({
        counter1 : 10,
        counter2 : 20,
    });

    const {counter1, counter2} = state;
    
    console.log(counter1)
    console.log(counter2)
    return (
        <>
            <div className = "containerPrincipal">
                {/* <h1>CounterApp {increment}</h1> */}
                <h1>{counter1}</h1>
                <h1>{counter2}</h1>
                <hr></hr>
                <button 
                className = "btn btn-primary"
                // onClick = {()=> setincrement(increment+1)}
                onClick = {()=> setincrement({
                    ...state,
                    counter1 : counter1 +1,
                })}
                >Add</button>
            </div>
        </>
    )
}
