import axios from "axios"
import React from "react"
import { useDispatch } from "react-redux"
import { fetchCompleteTodosById } from "../../redux/actions/complete.actions"
import { fetchTodosById } from "../../redux/actions/todos.actions"
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';

function TodoCard({id, title, status, boardId, description}) {
    const[check, setCheck]=React.useState(false)
    const [titleCheck, setTitleEditCheck]=React.useState(false)
    const [updatedTitle, setUpdatedTitle]=React.useState('')
    const [descriptionCheck, setDescriptionEditCheck]=React.useState(false)
    const [updatedDescription, setUpdatedDescription]=React.useState('')
    const dispatch=useDispatch()
    
    async function deleteTodo(){
     if(status==='active'){
         
         try{
             await axios.post(` ${process.env.REACT_APP_API_URL}/boards/${boardId}/deleteTodo`,{
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
                  await axios.post(` ${process.env.REACT_APP_API_URL}/boards/${boardId}/deleteComplete`,{
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

                await axios.post(`${process.env.REACT_APP_API_URL}/boards/${boardId}/addComplete`,
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
    async function handleUpdateTitle(e){
        e.preventDefault()        
        try{
              await axios.post(`${process.env.REACT_APP_API_URL}/boards/${boardId}/updateTodoTitle`,{
                  todoId:id,
                  updatedTitle
                  
              },{
                  headers:{
                        "Content-Type":"application/json",
                        "Access-Control-Allow-Origin":"*"
                  }
              })
              dispatch(fetchTodosById(boardId))
        }catch(err){
            throw err
        }
        
        setUpdatedTitle('')
        setTitleEditCheck(false)
    }
    
    async function handleUpdateDescription(e){
        e.preventDefault()
         try{
              await axios.post(`${process.env.REACT_APP_API_URL}/boards/${boardId}/updateTodoDescription`,{
                    todoId:id,
                    updatedDescription
              },{
                  headers:{
                        "Content-Type":"application/json",
                        "Access-Control-Allow-Origin":"*"
                  }
              }) 
              dispatch(fetchTodosById(boardId))    
        }catch(err){
            throw err
        }
        
        console.log(updatedDescription)
        setUpdatedDescription('')
        setDescriptionEditCheck(false)
    }

    function keyDown(e){
        if(e.key==" " && e.target.value.length===0) e.preventDefault() 
    }

    return (
        <div className="p-2 my-8 text-sm border rounded-md shadow-md sm:text-base">
            <div className="flex justify-between">
            {!titleCheck  ? (
            <div className="flex items-center overflow-scroll">
            <h3 className="pr-1 overflow-scroll font-semibold uppercase whitespace-nowrap sm:text-lg">{title}</h3>
            {
                status==='active' &&
                <CreateIcon onClick={()=>setTitleEditCheck(true)} className="text-gray-600 rounded-md cursor-pointer hover:bg-gray-300" fontSize="small" />
            }
            </div>
                
            ):(
               <form onSubmit={handleUpdateTitle} className="flex items-center pr-2 space-x-2 items">
                   <input required={true} onKeyDown={keyDown} value={updatedTitle} type="text" className="w-20 border-b sm:w-auto focus:outline-none" placeholder="new title" onChange={(e)=>setUpdatedTitle(e.target.value)}/>
                   <button type="submit"><CheckIcon className="rounded-md cursor-pointer hover:bg-gray-300" fontSize="small"/></button>
                   <button type="button" className="rounded-md cursor-pointer hover:bg-gray-300" onClick={()=>setTitleEditCheck(false)}>
                       <CloseIcon  fontSize="small"/>
                       </button>
                </form> 
            )
        }
            <CloseIcon onClick={deleteTodo} className="rounded-md cursor-pointer hover:bg-gray-300"  fontSize="medium"/> 
            

            </div>
            {!descriptionCheck ? (
            <div className="flex items-center">
            <p className="py-4 pr-1 text-gray-500">{description}</p>
            {
             status==='active' &&   
            <CreateIcon onClick={()=>setDescriptionEditCheck(true)} className="text-gray-600 rounded-md cursor-pointer hover:bg-gray-300" fontSize="small"/>
        }
            </div>
                
            ):(
                  <form onSubmit={handleUpdateDescription} className="flex items-center pr-2 mt-1 space-x-2 items">
                      <input required={true} onKeyDown={keyDown} value={updatedDescription} type="text" className="w-20 my-4 border-b sm:w-auto focus:outline-none" placeholder="new description" onChange={(e)=>setUpdatedDescription(e.target.value)}/>
                   <button type="submit"><CheckIcon className="rounded-md cursor-pointer hover:bg-gray-300" fontSize="small"/></button>
                   <button type="button" className="rounded-md cursor-pointer hover:bg-gray-300" onClick={()=>setDescriptionEditCheck(false)}>
                       <CloseIcon  fontSize="small"/>
                       </button>
                  </form>  
            )}

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
