import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home/index';
import { ListReducer } from './pages/list/index';
import { ContactReducer } from './pages/contact/index';

import { ModalReducer } from './components/modal/index';


export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ListReducer,
    ...ModalReducer,
    ...ContactReducer
});
