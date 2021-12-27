import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TodoCard from './TodoCard'

function Todos() {
    const {id}=useParams()
    const {todos,loading}=useSelector(state=>state.fetchTodosReducer)
 
    return (
        <div className="col-span-1 x ">
            <span className='font-semibold'>Todos Active</span>
            {!loading ? (todos?.map(({todo_id, todo_title, board_id,status, todo_description})=>(
                <TodoCard key={todo_id} id={todo_id} title={todo_title} status={status} boardId={board_id} description={todo_description}/>
            )))
            :(
                <div>Loading...</div>
            )

            }

        </div>
    )
}

export default Todos
