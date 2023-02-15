import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

import  TodoListReducer  from './TodoList/TodoList.reducer'

const STORE = createStore( TodoListReducer , applyMiddleware( logger ) );


export default STORE;