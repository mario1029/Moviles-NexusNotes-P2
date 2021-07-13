import { Router } from 'express';
import session from './session';
import users from './users';
import task from './task'

const router = Router();

router.use('/session', session);
router.use('/users', users);
router.use('/task', task)
export default router;
