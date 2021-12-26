import Board from "./Board"
import React from "react"
import { useSelector } from "react-redux"


function Boards({activeId}) {
    const {boards, loading}=useSelector(state=>state.boardsReducer)

    return (
        <div className="flex mx-4 overflow-x-scroll">
            {!loading? boards?.map(board=>(
                <Board key={board.id}  activeId={activeId} name={board.title} id={board.id} />
            )):(
                <div>Loading...</div>
            )
        }
        </div>
    )
}

export default Boards
