import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    //obtener la referencia al userContex
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h3>Soy el Login screen</h3>
            <hr/>
            <button
                className = "btn btn-primary"
                onClick = {()=> setUser({
                    id : 123,
                    name : 'José',
                    lastName : 'Deniz'
                })}
            >
                Login
            </button>
        </div>
    )
}
