import {FETCH_BOARDS_FAILED, FETCH_BOARDS_REQUEST, FETCH_BOARDS_SUCCESS} from '../actionTypes'


export const boardsReducer=(state={boards:[], loading:false,
    error:''}, action)=>{
        const {payload, type}=action

        switch(type){
            case FETCH_BOARDS_REQUEST:
                return{
                    ...state,
                    loading:true
                }
            case FETCH_BOARDS_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    boards:payload,
                }
            case FETCH_BOARDS_FAILED:
                return {
                    ...state,
                    loading:false,
                    boards:[],
                    error:payload
                }
            default: return state
        }
    }

