import { EDIT_ITEM, DELETE_ITEM } from './actions';

const initialState = {
    items: [
        {
            id: 1,
            name: 'Rihanna - Diamonds',
            youtube: 'lWA2pjMjpBs'
        },
        {
            id: 2,
            name: 'Eminem - Love The Way You Lie ft. Rihanna',
            youtube: 'uelHwf8o7_U'
        },
        {
            id: 3,
            name: 'Eminem - Not Afraid',
            youtube: 'j5-yKhDd64s'
        },
        {
            id: 4,
            name: 'Red Hot Chili Peppers - Californication',
            youtube: 'YlUKcNNmywk'
        },
        {
            id: 5,
            name: 'Metallica - Nothing Else Matters',
            youtube: 'Tj75Arhq5ho'
        }
    ]
};

function listReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_ITEM:
            const idx = state.items.findIndex(item => item.id === action.id);
            state.items[idx].name = action.name;
            state.items[idx].youtube = action.youtube;
            return Object.assign({}, state, {
                items: state.items
            });
        case DELETE_ITEM:
            state.items = state.items.filter(item => item.id !== action.id);  
            return Object.assign({}, state, {
                items: state.items
            });
        default:
            return state;
    }
}


const ListReducer = {
    list: listReducer
};

export default ListReducer;
