import { Router } from 'express';
import postRoutes from './post.route';
import tagRoutes from './tag.route';

const router = Router();

router.use('/posts', postRoutes);
router.use('/tags', tagRoutes);

export default router;
