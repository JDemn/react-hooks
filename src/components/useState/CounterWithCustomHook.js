import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';


export const CounterWithCustomHook = () => {
    //pull the logic abount counter in custom hook folder
    const { counter, increment, decrement, reset} = useCounter();
    return (
        <>
            <h1>Counter with hook {counter}</h1>
            <hr />
            <div>
                <h4>{counter}</h4>
            </div>
            <button className="btn btn-primary" onClick={increment}> Increment 1</button>
            <button className='btn btn-secondary' onClick={decrement}> Decrement 1</button>
            <button className = 'btn btn-warning' onClick = {reset}>Reset</button>
        </>
    )
}
