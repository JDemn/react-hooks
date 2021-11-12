import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log('Me volví a generar :(');
    return (
        <>
            <button
            className = "btn btn-outline-primary"
            onClick = {()=> {
                increment(2);
            }}
            >Increment</button>
        </>
    )
});
