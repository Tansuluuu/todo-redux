import axios from "axios";

export const getTodos = () =>{
    return (dispatch) => {
       axios('https://64e2ef8fbac46e480e77edf1.mockapi.io/todo/todo')
           .then(res => dispatch({type: 'GET_TODOS', payload: res.data}))
    }
}

export const addTodo = (todo) => {
    return (dispatch) =>{
        axios.post('https://64e2ef8fbac46e480e77edf1.mockapi.io/todo/todo', todo)
            .then(res => dispatch({type: 'ADD_TODO', payload: res.data}))
    }
}

export const deleteTodo = todo => {
    return(dispatch) => {
        axios.delete(`https://64e2ef8fbac46e480e77edf1.mockapi.io/todo/todo/${todo.id}`)
            .then(res => dispatch({type: 'DELETE_TODO', payload: res.data}))
    }
}

export const editTodo = todo => {
    return(dispatch) => {
        axios.put(`https://64e2ef8fbac46e480e77edf1.mockapi.io/todo/todo/${todo.id}`, todo)
            .then(res => dispatch({type: 'EDIT_TODO' , payload: res.data}))
    }
}