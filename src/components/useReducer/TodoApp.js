import React, { useEffect, useReducer } from 'react'
import './styles.css';

//reducer
import { todoReducer } from './todoReducer';

//custom hook
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';


const init = () => {

    return JSON.parse(localStorage.getItem('stateTodo')) || []
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }
    // ]
}

export const TodoApp = () => {
    // const [state, dispatch] = useReducer(todoReducer, initialState);
    const [stateTodo, dispatch] = useReducer(todoReducer,[], init);
    const [{ description }, haleInputChange, reset] = useForm({
        description: ''
    });

    //guardar todos en local storage
    useEffect(() => {
        localStorage.setItem('stateTodo', JSON.stringify(stateTodo))
    }, [stateTodo]);

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

    const handleDelete=(todoId)=>{
        console.log(todoId);

        //generando la acción
        const deleteAction = {
            type : 'delete',
            payload : todoId //dejamos el payload como el argumento de la funci[on]
        }

        dispatch(deleteAction);
    }
    const handleToggle =(todoId)=> {
        //creando el objeto action dentro del mismo dispatch
        dispatch({
            type : 'toggle',
            payload : todoId
        })
    }
    return (
        <div>
            <h2>Todo App ({ stateTodo.length })</h2>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    {/* pasarle estas props al componente hijo (stateTodo, handleDelete, handleToggle) */}
                    <TodoList 
                        stateTodo = { stateTodo }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle }
                    />
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
