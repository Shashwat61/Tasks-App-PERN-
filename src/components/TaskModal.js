import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TodoForm from './TodoForm';


function TaskModal({active, handleClose, headerProp}) {


    return (

        <Dialog open={active} onClose={handleClose}>
          <DialogTitle>Add Board details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill details 
            </DialogContentText>
            <TodoForm handleClose={handleClose} headerProp={headerProp}/>
          </DialogContent>
        
        </Dialog>
    )
}

export default TaskModal
