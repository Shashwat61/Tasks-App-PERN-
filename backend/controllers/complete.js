const db=require('../db')
const Complete=require('../models/Complete')
/*add todo -> post req -> /board/:id/addTodo sending todo in body -> accept id from param and  todo from body -> make a todos table which
board_id as req.params.id and todo_title as req.body.title 
*/

exports.createComplete=async(req, res, next)=>{
    // console.log(req.body, req.params.id)
    console.log('complete')
    // const completeId=req.body.todoId
    const boardId=req.params.id
    const title=req.body.title
    try{ 
          const compelete=new Complete({boardId, title})
          const result=await compelete.addComplete()
          res.send(result)
    }catch(err){
        throw err
    }
    
 }

 exports.getCompleteTodos=async(req, res, next)=>{
    const boardId=req.params.id
    try{
        const {rows}=await db.query(`SELECT * FROM complete WHERE board_id=${boardId}`)
        res.send(rows)
    }catch(err){
        throw err
    }
 }

