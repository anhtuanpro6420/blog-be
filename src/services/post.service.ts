import { IPost } from '../interfaces/post.interface';
import Post from '../models/post.model';

const getPosts = async () => {
  const posts = await Post.find();
  return posts;
};

const createPost = async (data: IPost) => {
  const post = await Post.create(data);
  return post;
};

export default {
  getPosts,
  createPost,
};
