import axios from "axios"
import { FETCH_BOARDS_FAILED, FETCH_BOARDS_REQUEST, FETCH_BOARDS_SUCCESS } from "../actionTypes"

export const fetchBoards=()=>{
    return (dispatch)=>{
        dispatch({type:FETCH_BOARDS_REQUEST})
        axios.get('http://localhost:8080/boards',{
            headers:{
                'Content-Type':'application/json','Access-Control-Allow-Origin':'*'
            }
        }).then((resp)=>{
            dispatch({type:FETCH_BOARDS_SUCCESS,payload:resp?.data})
        })
        .catch((err)=>{
            dispatch({type:FETCH_BOARDS_FAILED,payload:err.message})
        })
    }
}