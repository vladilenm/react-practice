import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const initialState = {
    isOpen: false,
    title: 'Модальное окно',
    btnText: 'OK',
    content: null
};

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, {
                isOpen: true,
                title: action.title,
                btnText: action.btnText,
                content: action.content
            });
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                isOpen: false
            });
        default:
            return state;
    }
}

const ModalReducer = {
    modal: modalReducer
};

export default ModalReducer;
