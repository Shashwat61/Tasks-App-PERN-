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
    const description=req.body.description
    try{ 
          const compelete=new Complete({boardId, title, description})
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

 exports.deleteComplete=async(req, res, next)=>{
     const completeId=req.body.id
     try{ 
            const {rows}=await db.query(`DELETE FROM complete WHERE complete_id=${completeId}`)
            res.send(rows)
     }catch(err){
         throw err
     }
 }
