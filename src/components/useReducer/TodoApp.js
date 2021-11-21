import React, { useEffect, useReducer } from 'react'
import './styles.css';

//reducer
import { todoReducer } from './todoReducer';
//our components
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


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
    

    //guardar todos en local storage
    useEffect(() => {
        localStorage.setItem('stateTodo', JSON.stringify(stateTodo))
    }, [stateTodo]);

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
    const  handleAddTodo = ( newTodo ) =>{
        dispatch(
            {
                type : 'add',
                payload : newTodo
            }    
        );    
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
                    <TodoAdd handleAddTodo={ handleAddTodo }/>
                </div>
            </div>
        </div>
    )
}
