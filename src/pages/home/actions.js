import { LS, delay } from '../../utils/index';

export const ADD_TODO = 'ADD_TODO';
export const LIKE_TODO = 'LIKE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODOS = 'GET_TODOS';

export function addTodo(todos, name) {
    let error = '';
    if (!name) {
        error = 'Необходимо ввести название';
    }

    let id = 1;
    if (todos.length) {
        id = todos[todos.length - 1].id + 1;
    }

    return {
        type: ADD_TODO,
        id, name, error
    };
}

export function likeTodo(todo) {
    const liked = !todo.liked;
    
    return {
        type: LIKE_TODO,
        todo, liked
    };
}

export function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        todo
    };
}

export function getTodos() {
    const todos = LS.get('todos');
    
    return (dispatch) => {
        delay(4000).then(() => {
            dispatch({
                type: GET_TODOS,
                todos
            });
        });
    };
}
