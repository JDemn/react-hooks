import React from 'react'

export const Small = React.memo(({value}) => {
    //memo ayuda a guardar un valor en meoria y no renderizarlo a cada rato si su valor en el state no cambia.
    //Evitando así el consumo de memorí y plan de datos del usuario en una petición http por ejemplo
    console.log('Me volví a llmar :(');

    return (
        <small>
            {value}
        </small>
    )
});
