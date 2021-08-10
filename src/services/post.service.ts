import Post from '../models/post.model';

const getPosts = async () => {
  const posts = await Post.find();
  return posts;
};

export default {
  getPosts,
};
