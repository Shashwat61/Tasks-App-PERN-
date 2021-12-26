import React from "react"
import { useSelector } from "react-redux"
import { TodosContext } from '../App'
import TodoCard from './TodoCard'
import {useParams} from 'react-router-dom'
function Completed() {
    const {id}=useParams()
    const {completedTodos, loading}=useSelector(state=>state.fetchCompletedTodosReducer)
    return (
        <div className=" col-span-1">
            <span className="font-semibold">Todos Completed</span>
            {!loading ? completedTodos?.map(({complete_id, board_id, complete_title})=>(
                <TodoCard key={complete_id} id={complete_id} title={complete_title}  />
            )):(
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Completed
