import { Router } from 'express';
import session from './session';
import users from './users';
import task from './task'
import stadistics from './statistics'
const router = Router();

router.use('/session', session);
router.use('/users', users);
router.use('/task', task)
router.use('/statistics', stadistics)
export default router;
