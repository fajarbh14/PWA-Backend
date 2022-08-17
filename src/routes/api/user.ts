import { requireUser } from '@/middleware/requireUser'
import { Router } from 'express'
import * as UserController from '../../controllers/user.controller'
const router = Router()

router.get('/data', requireUser, UserController.getCurrentUserData)
router.get('/', UserController.get)
router.get('/:id', UserController.getById)
router.post('/', UserController.store)


export default router
