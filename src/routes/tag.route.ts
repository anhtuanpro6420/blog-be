import { Router } from 'express';
import validate from '../middlewares/validation.middleware';
import {
  createTagSchema,
  getTagByIdSchema,
  deleteTagSchema,
  updateTagSchema,
} from '../validations/tag.validation';
import {
  getTags,
  createTag,
  getTagById,
  updateTag,
  deleteTag,
} from '../controllers/tag.controller';

const router = Router();

router.get('/', getTags);
router.post('/', validate(createTagSchema), createTag);
router.get('/:tagId', validate(getTagByIdSchema), getTagById);
router.patch('/:tagId', validate(updateTagSchema), updateTag);
router.delete('/:tagId', validate(deleteTagSchema), deleteTag);

export default router;
