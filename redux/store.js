import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { boardsReducer } from './reducers/boards.reducer'
import { fetchTodosReducer } from './reducers/todos.reducer'
import { fetchCompletedTodosReducer } from './reducers/completeTodos.reducer'

const rootReducer = combineReducers({
    // reducers
    boardsReducer,
    fetchTodosReducer,
    fetchCompletedTodosReducer
})

const store=createStore(rootReducer,{}, composeWithDevTools(applyMiddleware(thunk)))
export default store