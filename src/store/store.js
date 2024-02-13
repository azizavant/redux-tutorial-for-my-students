import { combineReducers, createStore } from 'redux'
import { todoReducer } from './todo-reducer.js'


const combinedReducers = combineReducers({
  todoReducer: todoReducer
})

export const store = createStore(combinedReducers)

