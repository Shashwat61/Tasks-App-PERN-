import axios from 'axios'
import {FETCH_COMPLETE_TODOS_REQUEST, FETCH_COMPLETE_TODOS_SUCCESS, FETCH_COMPLETE_TODOS_FAILED} from '../actionTypes'

export const fetchCompleteTodosById=(id)=>{
    return (dispatch)=>{
       dispatch({type:FETCH_COMPLETE_TODOS_REQUEST})
       axios.get(`${process.env.REACT_APP_API_URL}/boards/${id}/completetodos`,{
           headers:{
                'Content-Type':'application/json','Access-Control-Allow-Origin':'*'
           }
       }).then((resp)=>{
           dispatch({type:FETCH_COMPLETE_TODOS_SUCCESS,payload:resp?.data})
       }).catch((err)=>{
              dispatch({type:FETCH_COMPLETE_TODOS_FAILED,payload:err.message})
       })
    }
}