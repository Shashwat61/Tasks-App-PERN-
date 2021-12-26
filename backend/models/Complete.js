const db=require('../db')

function Complete({boardId, title, description}){
    this.boardId=boardId
    this.title=title
    this.description=description
    // this.completeId=completeId
    console.log(title, boardId, description)
}

Complete.prototype.addComplete=async function(){
    try{
        const {rows}=await db.query(`INSERT INTO complete(board_id, complete_title, complete_description) VALUES($1, $2, $3) `, [ this.boardId, this.title, this.description])
        console.log(rows,'rows')
        return rows
    }catch(err){
        throw err
    }
}




module.exports=Complete