import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { DevTools } from './utils/index';


function _getMiddleware() {
    const middleware = [
        thunk
    ];
    
    return applyMiddleware(...middleware);
}


export default function configureStore(initialState) {
    const store = compose(
        _getMiddleware(),
        DevTools.instrument()  
    )(createStore)(rootReducer, initialState);
    
    return store;
}
