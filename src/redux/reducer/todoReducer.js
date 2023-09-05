const initialState = {
    todos: [],

}
export default function todoReducer (state = initialState, acton){
    switch (acton.type){
        case 'GET_TODOS':
            return {...state, todos: acton.payload}
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, acton.payload]}
        case 'DELETE_TODO':
            return {...state, todos: state.todos.filter(todo => todo.id !== acton.payload.id)}
        case 'EDIT_TODO':
            return {...state, todos:state.todos.map(todo => todo.id === acton.payload.id ? acton.payload : todo) }
        default:
            return state
    }
}