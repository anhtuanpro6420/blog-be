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

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { postId },
  } = req || {};
  try {
    const post = await postSvc.getPostById(postId);
    return res.status(200).json(post);
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
    const post = await postSvc.createPost(body);
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { postId },
    body,
  } = req || {};
  try {
    const post = await postSvc.updatePost(postId, body);
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { postId },
  } = req || {};
  try {
    const post = await postSvc.deletePost(postId);
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
