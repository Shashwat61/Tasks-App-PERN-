import BigComponent from "./BigComponent"
import Details from "./Details"
import Orders from "./Orders"
import Payment from "./Payment"
import SmallComponent from "./SmallComponent"
import Voucher from "./Voucher"
import {useParams} from 'react-router-dom'
import Header from "./Header"
import PhaseContainer from "./PhaseContainer"
import React from "react"
import { fetchBoards } from "../../redux/actions/boards.actions"
import { useDispatch } from "react-redux"

function MainContent() {
    const {id}=useParams()
    const dispatch=useDispatch()

    React.useEffect(()=>{
        //only on the first mount tocheck -> run useeffect on id change
        console.log('maincontainer')
        dispatch(fetchBoards())
    },[])

    console.log(id)
    return (
        <div className=" max-w-7xl mx-auto">
            <Header activeId={id}/>
            <PhaseContainer/>
           
            
        </div>
    )
}

export default MainContent
