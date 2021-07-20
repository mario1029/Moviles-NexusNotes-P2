import { Router } from 'express';
import session from './session';
import users from './users';
import task from './task'
import stadistics from './statistics';
import file from './file'
import { isAuth } from '@validations/auth';
const router = Router();

router.use('/session', session);
router.use('/users', users);
router.use('/task',isAuth, task);
router.use('/statistics',isAuth ,stadistics);
router.use('/file', isAuth, file)
export default router;
