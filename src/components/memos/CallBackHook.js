import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    //Callback hook se usa para mandar una función como argumento a un componente hijo
    const [counter, setcounter] = useState(10);

    // const increment =()=> {
    //     setcounter(counter +1)
    // }

    //Use callBack retorna un función que es la que se usa para mandarla como argumento al componente hijo
    const increment = useCallback((num)=> {
        setcounter((c)=> c+num);   // se debe usar la anonymous function para eliminar la dependencia
    },[setcounter])
    return (
        <div>
            <h2>Use callback Hook { counter }</h2>
            <hr/>
            <ShowIncrement increment = {increment} />
        </div>
    )
}
