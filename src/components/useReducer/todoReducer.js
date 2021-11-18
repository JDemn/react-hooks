
export const todoReducer=( state = [], action)=>{
    switch (action.type) {
        case 'add':
            return [ ...state, action.payload ];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload)
        case 'toggle' : //forma corta marcar completada tarea
            return state.map( todo => 
                (todo.id === action.payload)
                    ? {...todo, done : !todo.done}
                    : todo
            );
        case 'toggle-old':  // forma larga ...
            return state.map( todo =>{
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done : !todo.done
                    }
                } else {
                    return todo;
                };
            })
        default:
            return state;
    }
}