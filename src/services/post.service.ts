import { IPost } from '../interfaces/post.interface';
import Post from '../models/post.model';

const getPosts = async () => {
  const posts = await Post.find();
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
};
