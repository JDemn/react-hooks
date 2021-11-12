import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../helpers/ProcesoPesado';


export const MemoHook = () => {
    const { counter, increment }=useCounter(4000);
    const [show, setshow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);  //primer argumento la función, segundo: la dependencia que vamos a estar observando, se guarda en memoría su valor hasta que vuelva a actualizarse
    
    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>
            <p>{ memoProcesoPesado }</p>
            <button onClick = {increment} className = "btn btn-warning">Incrementar + 1</button>
            <button
            className = "btn btn-outline-primary m-3"
            onClick = {()=> setshow(!show)}
            > Show/Hide {JSON.stringify(show)}</button>    
        </div>
    )
}
