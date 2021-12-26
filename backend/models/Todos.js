const db=require('../db')

function Todos({boardId,todoTitle}){
    this.boardId=boardId
    this.todoTitle=todoTitle
    console.log(todoTitle, boardId,'controller')
}

Todos.prototype.addTodo=async function(){
 try{
     const {rows}=await db.query(`INSERT INTO todos(board_id, todo_title) VALUES($1, $2) `, [this.boardId, this.todoTitle])
     console.log(rows,'rows')
     return rows
 }catch(err){
     throw err
 }
}


// Boards.prototype.fetchBoards=async function(){
//     try{
//         const {rows}=await db.query(`SELECT * FROM boards`)
//         console.log(rows)
//         return rows
//     }catch(err){
//         throw err
//     }
// }
module.exports=Todos
// db.query: the query method we exported earlier from db/index.js