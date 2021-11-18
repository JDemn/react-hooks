import React from 'react'

export const TodoListItem = ({ items, index, handleDelete, handleToggle }) => {
    return (
        <li
            key={items.id}
            className="list-group-item"
        >
            <p
                className={'text-center', `${items.done && 'complete'}`}
                onClick={() => handleToggle(items.id)}
            >
                {index + 1}. {items.desc}
            </p>
            <button
                className='btn btn-danger'
                onClick={() => handleDelete(items.id)} //se pone la funci[on] handleDelete en un callback porque necesita un argumento 'sate.id'
            >
                Borrar
            </button>
        </li>
    )
}
