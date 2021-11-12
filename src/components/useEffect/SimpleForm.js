import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: '',
    });
    const { name, email } = formState;

    //Ejecuta un efecto cuando haya un cambio en un cierto componente
    useEffect(() => {
        console.log('Hey!')
    }, []);

    useEffect(() => {
        console.log('Form state cambió!')
    }, [formState]);

    useEffect(() => {
        console.log('Form state cambió!')
    }, [ email ]);

    const handleInpuntChange = ({ target }) => {
        console.log(target.name);
        setformState({
            ...formState,
            [target.name]: target.value
        });
    }
    return (
        <>
            <h1>Use Effect</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control mb-4"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInpuntChange}
                />

                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInpuntChange}
                />
            </div>

            {(name === '123') && <Message />}
        </>
    )
}
