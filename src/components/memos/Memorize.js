import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
    const { counter, increment }=useCounter(10);
    const [show, setshow] = useState(true);
    return (
        <div>
            <h2>Counter:<Small value = {counter}/> </h2>
            <hr/>

            <button onClick = {increment} className = "btn btn-warning">Incrementar + 1</button>
            <button
            className = "btn btn-outline-primary m-3"
            onClick = {()=> setshow(!show)}
            > Show/Hide {JSON.stringify(show)}</button>    
        </div>
    )
}
