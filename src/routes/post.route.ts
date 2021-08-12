import { Router } from 'express';
import validate from '../middlewares/validation.middleware';
import { createPostSchema } from '../validations/post.validation';
import { getPosts, createPost } from '../controllers/post.controller';

const router = Router();

router.get('/', getPosts);
router.post('/', validate(createPostSchema), createPost);

export default router;
