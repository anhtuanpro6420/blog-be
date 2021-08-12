const Joi = require('joi');

const createPostSchema = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

// eslint-disable-next-line import/prefer-default-export
export { createPostSchema };
