import React from 'react';

import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, haleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit =(e)=>{
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        };
        //objeto que quiero crear
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        //llamando función que contiene el dispatch y recibe el newTodo como argumento
        handleAddTodo( newTodo );
        reset();
    }
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={ handleSubmit }>
                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Aprender ...'
                    autoComplete='off'
                    onChange={haleInputChange}
                    value={description}
                />
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-3 btn-block'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
