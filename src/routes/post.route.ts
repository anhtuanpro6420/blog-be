import { Router } from 'express';
import { validate } from 'express-validation';
import { getPosts, createPost } from '../controllers/post.controller';

const router = Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;
