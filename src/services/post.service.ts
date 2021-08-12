import { IPost } from '../interfaces/post.interface';
import Post from '../models/post.model';
import { IQueryObj } from '../interfaces/common.interface';

const countPosts = async (filter: any) => {
  const count = await Post.find(filter).count();
  return count;
};

const getPosts = async (queryObj: IQueryObj) => {
  const { page, limit } = queryObj || {};
  const skip = limit * (page - 1) || 0;

  const posts = await Post.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  return posts;
};

const getPostById = async (id: string) => {
  const post = await Post.findById(id);
  return post;
};

const createPost = async (data: IPost) => {
  const post = await Post.create(data);
  return post;
};

const updatePost = async (id: string, data: IPost) => {
  const post = await Post.findByIdAndUpdate(id, data, { new: true });
  return post;
};

const deletePost = async (id: string) => {
  const post = await Post.findByIdAndDelete(id);
  return post;
};

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  countPosts,
};
