import {FETCH_COMPLETE_TODOS_FAILED, FETCH_COMPLETE_TODOS_REQUEST, FETCH_COMPLETE_TODOS_SUCCESS} from '../actionTypes'


export const fetchCompletedTodosReducer=(state={completedTodos:[], loading:false, err:''},action)=>{
    const {payload, type}=action
    switch(type){
        case FETCH_COMPLETE_TODOS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_COMPLETE_TODOS_SUCCESS:
            console.log(payload)
            return {
                ...state,
                loading:false,
                completedTodos:payload,
                err:''
            }
        case FETCH_COMPLETE_TODOS_FAILED:
            return {
                ...state,
                loading:false,
                completedTodos:[],
                err:payload
            }
        default: return state
    }
}