import { ITag } from '../interfaces/tag.interface';
import Tag from '../models/tag.model';
import { IQueryObj } from '../interfaces/common.interface';

const countTags = async (filter: any) => {
  const count = await Tag.find(filter).count();
  return count;
};

const getTags = async (queryObj: IQueryObj) => {
  const { page, limit } = queryObj || {};
  const skip = limit * (page - 1) || 0;

  const tags = await Tag.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
  return tags;
};

const getTagById = async (id: string) => {
  const tag = await Tag.findById(id);
  return tag;
};

const createTag = async (data: ITag) => {
  const tag = await Tag.create(data);
  return tag;
};

const updateTag = async (id: string, data: ITag) => {
  const tag = await Tag.findByIdAndUpdate(id, data, { new: true });
  return tag;
};

const deleteTag = async (id: string) => {
  const tag = await Tag.findByIdAndDelete(id);
  return tag;
};

export default {
  getTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
  countTags,
};
