import { Router } from 'express'
import { getTodos, addTodos, updateTodo, deleteTodo } from '../controllers/todos'

const router: Router = Router()

router.get('/todos', getTodos)
router.post('/add-todo', addTodos)
router.put('/edit-todo/:id', updateTodo)
router.delete('/delete-todo/:id', deleteTodo)

export default router