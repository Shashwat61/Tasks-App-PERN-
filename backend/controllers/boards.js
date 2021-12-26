const Board=require('../models/Boards')
const db=require('../db')

exports.postCreateBoard=async (req, res, next)=>{
   //gettin the data from the request body
   console.log(req.body)
    const {title}=req.body
    console.log(title)
    try{
        const board=new Board({title})
        const result=await board.createBoard()
        res.send(board)
    }
    catch(err){
      next(err)
    }
}

exports.getBoards=async (req, res, next)=>{
    try{
        const {rows}=await db.query(`SELECT * FROM boards`)
        console.log(rows)
        res.send(rows)
    }
    catch(err){
        next(err)
    }
}

exports.deleteBoard=async (req, res, next)=>{
    const id=req.params.id
    try{
        const {rows}=db.query(`DELETE FROM boards WHERE id=${id}`)
        console.log(rows)
        res.send(rows)
    }catch(err){
       throw err
    }
}


