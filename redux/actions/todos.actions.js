import axios from "axios"
import { FETCH_TODOS_FAILED, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS } from "../actionTypes"

export const fetchTodosById=(id)=>{
    return (dispatch)=>{
        dispatch({type:FETCH_TODOS_REQUEST})
        axios.get(`${process.env.REACT_APP_API_URL}/boards/${id}/todos`,{
            headers:{
                'Content-Type':'application/json','Access-Control-Allow-Origin':'*'
            }
        }).then((resp)=>{
            dispatch({type:FETCH_TODOS_SUCCESS,payload:resp?.data})
        })
        .catch((err)=>{
            dispatch({type:FETCH_TODOS_FAILED,payload:err.message})
        })
    }
}