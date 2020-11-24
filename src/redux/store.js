import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import apiReducer from './apiDucks';

const rootReducers = combineReducers({
    Personajes: apiReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generarStore() {
    const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
    return store;
}