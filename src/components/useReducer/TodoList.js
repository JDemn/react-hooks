import React from 'react'
import './styles.css';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ stateTodo, handleDelete, handleToggle }) => {
    return (
        <ul className='list-group list-group-flush'>
            {/* manda los items, handleDelete, index, handleDelete and handleToggle al componente subhijo TodoListItem*/}
            {
                stateTodo.map((items, index) => (
                    <TodoListItem
                        key={items.id}
                        items={items}
                        index={index}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                )
                )
            }
        </ul>
    )
}
