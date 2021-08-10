import postSvc from '../services/post.service';

// eslint-disable-next-line import/prefer-default-export
export const getPosts = async () => {
  const posts = await postSvc.getPosts();
  return posts;
};
