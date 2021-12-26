import axios from "axios"
import React from "react"
import { useDispatch } from "react-redux"
import { fetchCompleteTodosById } from "../../redux/actions/complete.actions"
import { fetchTodosById } from "../../redux/actions/todos.actions"
//  chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
/* when check is true -> submit button -> post request to  */

function TodoCard({id, title, status, boardId}) {
    const[check, setCheck]=React.useState(false)
    const dispatch=useDispatch()
    
    async function deleteTodo(){
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
        <div className="p-2 shadow-md border my-8">
            <h3 className="font-semibold sm:text-lg uppercase">{title}</h3>
            <>
            {  status==='active' ? (

                <form className="flex my-2 items-center justify-between" onSubmit={handleSubmit}>
                <div className="flex items-center space-x-1 sm:space-x-2">
                <span>Completed</span>
                <input type="checkbox" className="h-4 w-4 " checked={check} onChange={handleChange}/>
                </div>
               
                   <button type="submit" className={check ? " ml-1 sm:ml-0  py-1 text-sm sm:text-base bg-gray-200 px-1 sm:px-2 rounded-md hover:bg-gray-300 focus:bg-gray-200":"hidden"}>Done</button>

                
            </form>
                    ): (
                        <div className="flex py-2 items-center space-x-2">
                        <span>Completed</span>
                        <input type="checkbox" className="h-4 w-4 " checked={!check} readOnly={true}  />
                        </div>
                    )
            }
                </>


        </div>
    )
}

export default TodoCard
