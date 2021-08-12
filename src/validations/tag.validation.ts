const Joi = require('joi');

const createTagSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getTagByIdSchema = {
  params: Joi.object().keys({
    tagId: Joi.string().required(),
  }),
};

const updateTagSchema = {
  body: Joi.object().keys({
    name: Joi.string(),
  }),
  params: Joi.object().keys({
    tagId: Joi.string().required(),
  }),
};

const deleteTagSchema = {
  params: Joi.object().keys({
    tagId: Joi.string().required(),
  }),
};

export { createTagSchema, getTagByIdSchema, updateTagSchema, deleteTagSchema };
