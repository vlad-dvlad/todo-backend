import { Router } from 'express'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user'
import { parsePaginationQuery } from '../middlewares/pagination'
import { parseIdParam } from '../middlewares/item-id'

const router = Router()

router.get('/', parsePaginationQuery, getUsers)
router.get('/:id', parseIdParam, getUserById)
router.post('/', createUser)
router.patch('/:id', parseIdParam, updateUser)
router.delete('/:id', parseIdParam, deleteUser)

export default router
