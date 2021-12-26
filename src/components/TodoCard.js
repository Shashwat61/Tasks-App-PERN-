import axios from "axios"
import React from "react"
import { useDispatch } from "react-redux"
import { fetchCompleteTodosById } from "../../redux/actions/complete.actions"
import { fetchTodosById } from "../../redux/actions/todos.actions"
import CloseIcon from '@mui/icons-material/Close';

//  chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
/* when check is true -> submit button -> post request to  */

function TodoCard({id, title, status, boardId, description}) {
    const[check, setCheck]=React.useState(false)
    const dispatch=useDispatch()
    
    async function deleteTodo(){
     if(status==='active'){
         
         try{
             await axios.post(` http://localhost:8080/boards/${boardId}/deleteTodo`,{
                 id
                },{
                    headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*'
                    }
                })
                dispatch(fetchTodosById(boardId))
            }catch(err){
                throw err
            }
        }else{
            try{
                  await axios.post(` http://localhost:8080/boards/${boardId}/deleteComplete`,{
                        id
                  },{
                      headers:{
                            'Content-Type':'application/json',
                            'Access-Control-Allow-Origin':'*'
                      }
                  })
                  dispatch(fetchCompleteTodosById(boardId))
            }catch(err){
                throw err
            }
        }  
    }
    
    function handleChange(){
       setCheck(!check)
    }
    
    async function handleSubmit(e){
        e.preventDefault()
         
        if(check){
            deleteTodo()
            try{

                await axios.post(`http://localhost:8080/boards/${boardId}/addComplete`,
                {
                    completeId:id,
                    title,
                    description
                },
                {
                    headers:{
                        "Content-Type":"application/json",
                        "Access-Control-Allow-Origin":"*"
                    }
                }
                )
            }
            catch(err){
                throw err
            }
            dispatch(fetchCompleteTodosById(boardId))
            
        }
    }

    return (
        <div className="p-2 my-8 border shadow-md">
            <div className="flex justify-between">
            <h3 className="font-semibold uppercase sm:text-lg">{title}</h3>
            <CloseIcon onClick={deleteTodo} className="rounded-md cursor-pointer hover:bg-gray-300"  fontSize="medium"/> 
            

            </div>
            <p className="py-4 text-gray-500">{description}</p>
            <>
            {  status==='active' ? (

                <form className="flex items-center justify-between my-2" onSubmit={handleSubmit}>
                <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="font-semibold">Completed</span>
                <input type="checkbox" className="w-4 h-4 " checked={check} onChange={handleChange}/>
                </div>
               
                   <button type="submit" className={check ? " ml-1 sm:ml-0  py-1 text-sm sm:text-base bg-gray-200 px-1 sm:px-2 rounded-md hover:bg-gray-300 focus:bg-gray-200":"hidden"}>Done</button>

                
            </form>
                    ): (
                        <div className="flex items-center py-2 space-x-2">
                        <span className="font-semibold">Completed</span>
                        <input type="checkbox" className="w-4 h-4 " checked={!check} readOnly={true}  />
                        </div>
                    )
            }
                </>


        </div>
    )
}

export default TodoCard
