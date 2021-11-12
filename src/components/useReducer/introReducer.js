const initialState = [{
    id : 1,
    todo : 'comprar pan',
    done : false
}];

const todoReducer =(state = initialState, action)=>{
    //trabajar con lo que viene de la acción
    if(action?.type === 'agregar'){
        //se actualiza el state actual con lo que exista en payload
        return [ ...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

//new todo. queremos agregar el contenido al todo existente
const newTodo = {
    id : 2,
    todo : 'Comprar leche',
    done : false,
}

// actualizamos el estado a través de la action
const action = {
    type : 'agregar',
    payload : newTodo
}

todos = todoReducer(todos,action);
console.log(todos);