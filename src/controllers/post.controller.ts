import { NextFunction, Request, Response } from 'express';

import postSvc from '../services/post.service';

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await postSvc.getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req || {};
  try {
    const posts = await postSvc.createPost(body);
    return res.status(201).json(posts);
  } catch (error) {
    next(error);
  }
};
