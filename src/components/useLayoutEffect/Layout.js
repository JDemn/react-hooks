import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

import '../examples/multipleCustom.css';
import './layout.css';
export const Layout = () => {
    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0]; //!! = true (si la data existe) && entonces extarela en la posición 0 data[0]

    const pTag = useRef();
    
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect() )  //sacar las dimenciones de un div
    }, [quote]); 

    return (
        <>
            <h1>Layout Effect</h1>
            <hr></hr>
            <div className="containerPrincipal m-3">
                <div className="deslizable">
                    <blockquote className="blockquote text-center">
                        <p 
                        className="mb-0 mt-2"
                        ref = {pTag}
                        >{quote}</p>
                    </blockquote>
                </div>
            </div>

            {/* cargar siguiente frase */}
            <button
                className='btn btn-primary'
                onClick={increment}
            > Cargar siguinete frase</button>
        </>
    )
}
