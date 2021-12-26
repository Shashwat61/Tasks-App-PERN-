const express=require('express')
const router=express.Router()
const boardController=require('../controllers/boards')
const todosController=require('../controllers/todos')
const completeController=require('../controllers/complete')

router.get('/',boardController.getBoards)
router.post('/addBoard',boardController.postCreateBoard)
router.post('/delete/:id',boardController.deleteBoard)

router.get('/:id/todos', todosController.getTodos)
router.post('/:id/addTodo',todosController.createTodo)
router.post('/:id/deleteTodo', todosController.deleteTodo)

router.get('/:id/completetodos', completeController.getCompleteTodos)
router.post('/:id/addComplete', completeController.createComplete)
router.post('/:id/deleteComplete', completeController.deleteComplete)


module.exports=router
