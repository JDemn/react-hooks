import React from 'react'
import { useReducer } from 'react';
import { useEffect } from 'react';
import './styles.css';

//reducer
import { todoReducer } from './todoReducer';

//custom hook
import { useForm } from '../../hooks/useForm';


const init = () => {

    return JSON.parse(localStorage.getItem('state')) || []
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }
    // ]
}

export const TodoApp = () => {
    // const [state, dispatch] = useReducer(todoReducer, initialState);
    const [state, dispatch] = useReducer(todoReducer,[], init);
    const [{ description }, haleInputChange, reset] = useForm({
        description: ''
    });

    //guardar todos en local storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state]);

    const handleSubmit = (e) => {
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
        //generando la acción
        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset()
    }
    return (
        <div>
            <h2>Todo App ({state.length})</h2>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            state.map((items, index) => (
                                <li
                                    key={items.id}
                                    className="list-group-item"
                                >
                                    <p className='text-center'>{index + 1}. {items.desc}</p>
                                    <button
                                        className='btn btn-danger'
                                    >
                                        Borrar
                                    </button>
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
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
                </div>
            </div>
        </div>
    )
}