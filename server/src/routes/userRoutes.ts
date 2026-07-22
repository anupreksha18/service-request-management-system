import { Router } from 'express';
import { requireAuth, isAdmin } from '../middleware/auth';
import { getUsers } from '../controllers/userController';

const router = Router();

router.get('/', requireAuth, isAdmin, getUsers);

export default router;