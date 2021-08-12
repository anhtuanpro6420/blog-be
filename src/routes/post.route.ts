import { Router } from 'express';
import validate from '../middlewares/validation.middleware';
import {
  createPostSchema,
  getPostByIdSchema,
  deletePostSchema,
  updatePostSchema,
} from '../validations/post.validation';
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from '../controllers/post.controller';

const router = Router();

router.get('/', getPosts);
router.post('/', validate(createPostSchema), createPost);
router.get('/:postId', validate(getPostByIdSchema), getPostById);
router.patch('/:postId', validate(updatePostSchema), updatePost);
router.delete('/:postId', validate(deletePostSchema), deletePost);

export default router;
