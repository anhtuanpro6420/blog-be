const Joi = require('joi');

const createPostSchema = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
  }),
};

const getPostByIdSchema = {
  params: Joi.object().keys({
    postId: Joi.string().required(),
  }),
};

const updatePostSchema = {
  body: Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  }),
  params: Joi.object().keys({
    postId: Joi.string().required(),
  }),
};

const deletePostSchema = {
  params: Joi.object().keys({
    postId: Joi.string().required(),
  }),
};

export {
  createPostSchema,
  getPostByIdSchema,
  updatePostSchema,
  deletePostSchema,
};
