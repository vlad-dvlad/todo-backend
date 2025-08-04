import { Router } from 'express'
import { assignUser, createTask, deleteTask, getTaskById, getTasks, updateTask } from '../controllers/task'
import { parsePaginationQuery } from '../middlewares/pagination'
import { parseIdParam } from '../middlewares/item-id'

const router = Router()

router.get('/', parsePaginationQuery, getTasks)
router.get('/:id', parseIdParam, getTaskById)
router.post('/', createTask)
router.patch('/:id', parseIdParam, updateTask)
router.delete('/:id', parseIdParam, deleteTask)
router.patch('/:id/assign', parseIdParam, assignUser)

export default router
