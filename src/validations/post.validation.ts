const Joi = require('joi');

const createPostSchema = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tag: Joi.string(),
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
    tag: Joi.string(),
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
