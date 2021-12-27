const db=require('../db')
const Todos = require('../models/Todos')

/*add todo -> post req -> /board/:id/addTodo sending todo in body -> accept id from param and  todo from body -> make a todos table which
board_id as req.params.id and todo_title as req.body.title 
*/

exports.createTodo=async(req, res, next)=>{
    // console.log(req.body, req.params.id)
    const todoTitle=req.body.title
    const description=req.body.description
    const boardId=req.params.id
    console.log(todoTitle, boardId)
    try{
        const todo=new Todos({todoTitle, boardId, description})
        const result=await todo.addTodo()
        res.send(result)
    }catch(err){
        res.send(err)
    }
 }

 exports.getTodos=async(req, res, next)=>{
    const boardId=req.params.id
    try{
        const {rows}=await db.query(`SELECT * FROM todos WHERE board_id=${boardId}`)
        res.send(change(rows))
    }catch(err){
        throw err
    }
 }

 function change(rows){
   const arr=[...rows]
    for(const key in arr){
        arr[key].status='active'
    }
    return arr
 }


 exports.updateTodoTitle=async(req, res, next)=>{
    console.log(req.body.todoId, req.body.updatedTitle)
    const todoId=req.body.todoId
    const title=req.body.updatedTitle

    try{
        const {rows}=await db.query(`UPDATE todos SET todo_title=$1 WHERE todo_id=$2`,[title, todoId])
        res.send(rows)
    }
    catch(err){
       throw err
    }
 }

 exports.updateTodoDescription=async(req, res, next)=>{
     console.log(req.body.todoId, req.body.updatedDescription)
     const todoId=req.body.todoId
     const description=req.body.updatedDescription
     try{
          const {rows}=db.query(`UPDATE todos SET todo_description=$1 WHERE todo_id=$2`,[description, todoId])
          res.send(rows)
     }catch(err){
         throw err
     }
 }

 exports.deleteTodo=async(req, res, next)=>{
     console.log('todos')
        const todoId=req.body.id
        try{ 
               const {rows}=await db.query(`DELETE FROM todos WHERE todo_id=${todoId}`)
               res.send(rows)
        }catch(err){
            throw err
        }
 }