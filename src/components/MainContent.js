import {useParams} from 'react-router-dom'
import Header from "./Header"
import PhaseContainer from "./PhaseContainer"
import React from "react"
import { fetchBoards } from "../../redux/actions/boards.actions"
import { useDispatch } from "react-redux"
import { fetchTodosById } from "../../redux/actions/todos.actions"
import { fetchCompleteTodosById } from "../../redux/actions/complete.actions"

function MainContent() {
    const {id}=useParams()
    const dispatch=useDispatch()

    React.useEffect(()=>{
        dispatch(fetchBoards())
        dispatch(fetchTodosById(id))
        dispatch(fetchCompleteTodosById(id))
    },[])

    return (
        <div className="mx-auto max-w-7xl">
            <Header activeId={id}/>
            <PhaseContainer/>            
        </div>
    )
}

export default MainContent
