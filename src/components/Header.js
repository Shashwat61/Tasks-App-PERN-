import {AiOutlineArrowLeft} from 'react-icons/ai'
import Board from './Board'
import Boards from './Boards'
import axios from 'axios'
import React from 'react'
import TaskModal from './TaskModal'
import { useDispatch } from 'react-redux'
import { fetchBoards } from '../../redux/actions/boards.actions'

function Header({activeId}) {
    const[active, setActive]=React.useState(false)
    const dispatch=useDispatch()
    async function handleAddBoard(){
        setActive(true)
    }

    function handleClose(){
        setActive(false)
    }

    // React.useEffect(()=>{
    //    dispatch(fetchBoards())
    // },[dispatch])

    return (
        <div className="">

        <div className="w-full flex border-b items-center py-2 px-4   justify-between">
            <span className="font-semibold "> TODO APP</span>
            <button onClick={handleAddBoard} className="bg-gray-200 p-1 rounded-md hover:bg-gray-300 focus:outline-none">Add board +</button>
            {active && <TaskModal headerProp active={active} handleClose={handleClose} />}
        </div>
        <div className=" pt-8 ">
            <Boards activeId={activeId}/>
        </div>
        </div>
    )
}

export default Header
