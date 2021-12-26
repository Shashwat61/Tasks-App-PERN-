import {FETCH_TODOS_FAILED, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS} from '../actionTypes'


export const fetchTodosReducer=(state={todos:[], loading:false, err:''},action)=>{
    const {payload, type}=action
    switch(type){
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_TODOS_SUCCESS:
            console.log(payload)
            return {
                ...state,
                loading:false,
                todos:payload,
                err:''
            }
        case FETCH_TODOS_FAILED:
            return {
                ...state,
                loading:false,
                todos:[],
                err:payload
            }
        default: return state
    }
}