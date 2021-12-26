import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBoards } from '../../redux/actions/boards.actions';
import {useDispatch} from 'react-redux'
import { fetchTodosById } from '../../redux/actions/todos.actions';
import { fetchCompleteTodosById } from '../../redux/actions/complete.actions';
/* click x -> post request /delete/:id -> route / -> dispatch(fetchBoards()) to get request to boards so that new data is fetched  */ 

/* click board -> dispatch a fn() -> make get req to route /boards/:id/todos eg-/boards/62/todos-> fetch data -> set in todos=[] */
function Board({id, name, activeId}) {
     const router=useNavigate()
     const dispatch=useDispatch()

     function handleFetchTodos(e){
      e.stopPropagation()
      dispatch(fetchTodosById(id))
      dispatch(fetchCompleteTodosById(id))
      router(`/${id}`)
    }

    async function handleDelete(){
        console.log(id,'delete')
        try{
             axios.post(`http://localhost:8080/boards/delete/${id}`,{
                 headers:{
                    'Content-Type':'application/json','Access-Control-Allow-Origin':'*'
                 }
             })
        }catch(err){
            console.log(err)
        }
        dispatch(fetchBoards())
        router('/')
    }
    
    return (
        <div className= {id==activeId ? 'bg-gray-300 boardButtons':"boardButtons"}>
        <div className=" py-1 text-sm sm:text-base sm:py-2  mx-4" onClick={handleFetchTodos}>
            <span className="mx-2 ">{name} {id==activeId ? 'active':''}</span>
        </div>
        <div onClick={handleDelete} className={id==activeId? "hover:bg-gray-500 p-1 cursor-pointer" :"hover:bg-gray-300 p-1 cursor-pointer" } >
        <CloseIcon className="" fontSize='4px' />
        </div>

        </div>
    )
}

export default Board
