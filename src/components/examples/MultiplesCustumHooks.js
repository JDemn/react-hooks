import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

import './multipleCustom.css';

export const MultiplesCustumHooks = () => {
    const { counter, increment }=useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0]; //!! = true (si la data existe) && entonces extarela en la posición 0 data[0]
    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr></hr>
            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center m-1">Loading ...</div>
                    )
                    :
                    (
                        <div className="containerPrincipal m-3">
                            <div className="deslizable">
                                <blockquote className="blockquote text-center">
                                    <p className="mb-0 mt-2">{ quote }</p>
                                    <footer className="blockquote-footer mt-1">{ author }</footer>
                                </blockquote>
                            </div>
                        </div>
                    )
            }

             {/* cargar siguiente frase */}
             <button
             className = 'btn btn-primary'
             onClick={increment}
             > Cargar siguinete frase</button>
        </>
    )
}
