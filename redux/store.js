import {combineReducers, applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './reducers';

const rootReducer = combineReducers({ taskReducer });

export const store = createStore (rootReducer, applyMiddleware(thunk));