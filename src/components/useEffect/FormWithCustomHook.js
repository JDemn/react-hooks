import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const [formState, handleInpuntChange] = useForm({
        name: '',
        email: '',
        password : '',
    }); 
    const { name, email, password } = formState;

    useEffect(()=>{
        console.log('Email cambió')
    },[email])

    const hanleSubmit=(e)=> {
        e.preventDefault();
        console.log(formState);
    }
    // const handleInpuntChange = ({ target }) => {
    //     console.log(target.name);
    //     setformState({
    //         ...formState,
    //         [target.name]: target.value
    //     });
    // }
    return (
        <form onSubmit = { hanleSubmit }>
            <h1>Form With custom Hook</h1>
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
                <input
                    type="password"
                    name="password"
                    className="form-control mt-3"
                    placeholder="password"
                    value={password}
                    onChange={handleInpuntChange}
                />
            </div>

            <button type = "submit" className = "btn btn-secondary mt-4 d-flex justify-content-center">Enviar</button>
            
        </form>
    )
}
