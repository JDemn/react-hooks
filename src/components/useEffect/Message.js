import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setcoords] = useState({
        x : 0,
        y : 0
    });

    const {x , y} = coords;

    useEffect(() => {

        const mouseMove =(e)=>{
            const coor = {x:e.x, y : e.y}
            console.log(coor);

            setcoords(coor);
        };

        window.addEventListener('mousemove', mouseMove)
        // console.log('Componente Montado');
        return () => {
            // console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
            <h3> Eres genial !!!</h3>
            <p>Coordenadas en X: {x}, y en Y : {y} </p>
        </>
    )
}
