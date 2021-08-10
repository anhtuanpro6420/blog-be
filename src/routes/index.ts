import { Router } from 'express';
import postRoutes from './post.route';

const router = Router();

router.use('/posts', postRoutes);

export default router;
