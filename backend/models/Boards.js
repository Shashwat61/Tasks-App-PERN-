const db=require('../db')

function Boards({title}){
    console.log(title,'controller')
  this.title=title
}
Boards.prototype.createBoard=async function(){
 try{
     const {rows}=await db.query(`INSERT INTO boards(title) VALUES($1) `, [this.title])
     console.log(rows)
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
module.exports=Boards
// db.query: the query method we exported earlier from db/index.js