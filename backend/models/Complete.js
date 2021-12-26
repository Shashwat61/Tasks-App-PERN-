const db=require('../db')

function Complete({boardId, title}){
    this.boardId=boardId
    this.title=title
    // this.completeId=completeId
    console.log(title, boardId)
}

Complete.prototype.addComplete=async function(){
    try{
        const {rows}=await db.query(`INSERT INTO complete(board_id, complete_title) VALUES($1, $2) `, [ this.boardId, this.title])
        console.log(rows,'rows')
        return rows
    }catch(err){
        throw err
    }
}




module.exports=Complete