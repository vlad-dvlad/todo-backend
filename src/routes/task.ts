import { Router } from 'express'
import { assignUser, createTask, deleteTask, getTaskById, getTasks, updateTask } from '../controllers/task'

const router = Router()

router.get('/', getTasks)
router.get('/:id', getTaskById)
router.post('/', createTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)
router.patch('/:id/assign', assignUser)

export default router
