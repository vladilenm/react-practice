import { ADD_TODO } from './actions';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'Todo 1'
        }
    ],
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            let todos = state.todos;
            if (!action.error) {
                todos.push({ id: action.id, name: action.name });
            }
            return Object.assign({}, state, {
                error: action.error,
                todos
            });
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;

