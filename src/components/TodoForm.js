import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'
import DialogActions from '@mui/material/DialogActions';
import axios from "axios";
import { fetchBoards } from "../../redux/actions/boards.actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodosById } from "../../redux/actions/todos.actions";
// headerprop is true when the modal is opened from the header 
// if headerprop is true, form containing only the name of the title of the todo will be created
// else form containing the name of todo
// add board -> post request to backend -> create new row -> now make get request to backend to get the new board
/*add todo -> post req -> /board/:id/addTodo sending todo in body -> accept id from param and  todo from body -> make a todos table which contains boardId, todoId, todosId */

function ClientForm({handleClose, headerProp}) {
    const [boardName, setBoardName]=useState('')
    const [todoName, setTodoName]=useState('')
    const dispatch=useDispatch()
    const {id}=useParams()

    
    async function submitHeader(){
        try {
            await axios.post('http://localhost:8080/boards/addBoard',
            {
                title:boardName
            },
            {
                headers:{
                    'Content-Type':'application/json','Access-Control-Allow-Origin':'*'
                }
            })
        } catch (error) {
            console.log(error)
        }
        dispatch(fetchBoards())
       
    }
    
    async function submitTodo(){
        try{
            await axios.post(`http://localhost:8080/boards/${id}/addTodo`,
            {
                title:todoName
            },
            {
                headers:{
                    'Content-Type':'application/json','Access-Control-Allow-Origin':'*'
                }
            })
        }catch(err){
            console.log(err)
        }
        dispatch(fetchTodosById(id))
    }

    function handleSubmit(e){
        e.preventDefault()
        if(headerProp){
            submitHeader()
            setBoardName('') 
        }
        else{
            submitTodo()
            setTodoName('')
            }
            handleClose()
    }
                
              
    return (
        <>
        <form onSubmit={handleSubmit}>
             {
                 headerProp ? (

                     <TextField
                     autoFocus
                     margin="dense"
                     id="boardname"
                     label="Board Name"
                     required={true}
                     type="text"
                     fullWidth
                     variant="standard"
                     value={boardName}
                     onChange={(e)=>setBoardName(e.target.value)}
                     />
                     ):(

                         <TextField
                         margin="dense"
                         id="projname"
                         label="Todo Name"
                         type="text"
                         required={true}
                         fullWidth
                         variant="standard"
                         value={todoName}
                         onChange={(e)=>setTodoName(e.target.value)}
                         />
                         )
            }

            <div className="flex py-4 space-x-2 text-white place-content-end">
            <button onClick={handleClose} type="button" className="p-2 bg-blue-400 rounded-md ">Cancel</button>
            <button  type="submit" className="p-2 bg-blue-400 rounded-md ">Submit</button>
            </div>
            </form>
            </>
    )
}

export default ClientForm
