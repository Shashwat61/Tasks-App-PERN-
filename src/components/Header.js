import {AiOutlineArrowLeft} from 'react-icons/ai'
import Boards from './Boards'
import React from 'react'
import TaskModal from './TaskModal'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

function Header({activeId}) {
    const[active, setActive]=React.useState(false)

    async function handleAddBoard(){
        setActive(true)
    }

    function handleClose(){
        setActive(false)
    }



    return (
        <>

        <div className="flex items-center justify-between w-full px-4 py-2 border-b">
            <span className="font-semibold "> TODO APP</span>
            <Button variant="contained" onClick={handleAddBoard} >Add new board</Button>

            {active && <TaskModal headerProp active={active} handleClose={handleClose} />}
        </div>
        <div className="pt-8 ">
            <Boards activeId={activeId}/>
        </div>
        </>
    )
}

export default Header
