const db=require('../db')

function Todos({boardId,todoTitle,description}){
    this.boardId=boardId
    this.todoTitle=todoTitle
    this.description=description
    console.log(todoTitle, boardId,description,'controller')
}

Todos.prototype.addTodo=async function(){
 try{
     const {rows}=await db.query(`INSERT INTO todos(board_id, todo_title, todo_description) VALUES($1, $2, $3) `, [this.boardId, this.todoTitle, this.description])
     console.log(rows,'rows')
     return rows
 }catch(err){
     return err
 }
}

Todos.prototype.updateTitle=async function (id, title){
    try{
        const {rows}=await db.query(`UPDATE todos SET todo_title=$1 WHERE todo_id=$2`, [title, id])
        return rows
    }catch(err){
        return err
    }
}

module.exports=Todos
