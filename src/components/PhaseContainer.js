import {useState} from 'react'
import Button from '@mui/material/Button';
import TaskModal from './TaskModal';
import Todos from './Todos';
import Completed from './Completed';

function PhaseContainer() {
    const [active, setActive]=useState(false)
    function handleOpen(){
      setActive(true)
    }

    function handleClose(){
        setActive(false)
    }

    return (
        <div className="mt-8 p-4">
            {/* button to add tasks */}
            <div className="grid place-content-end">
            <Button variant="contained" onClick={handleOpen}  >Add a new task</Button>
            {active && <TaskModal active={active} handleClose={handleClose}/> }
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8 ">
            <Todos/>
            <Completed/>
            </div>
        </div>
    )
}

export default PhaseContainer
