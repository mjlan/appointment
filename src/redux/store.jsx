import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reducer from './reducer'
/*=================
    store.jsx
  中央数据处理器
==================*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(
    combineReducers(reducer),
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
