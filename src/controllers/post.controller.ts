import { NextFunction, Request, Response } from 'express';
import { IPagination } from '../interfaces/common.interface';
import {
  DEFAULT_FIRST_PAGE,
  DEFAULT_LIMIT_PAGE,
} from '../constants/common.constant';

import postSvc from '../services/post.service';

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    query: { page: pageReq, limit: limitReq },
  } = req || {};

  const page = Number(pageReq) || DEFAULT_FIRST_PAGE;
  const limit = Number(limitReq) || DEFAULT_LIMIT_PAGE;
  try {
    const totalPosts = await postSvc.countPosts({});
    const metadata: IPagination = {
      page,
      pages: Math.ceil(totalPosts / limit),
      total: totalPosts,
    };
    const posts = await postSvc.getPosts({ page, limit });
    return res.status(200).json({
      data: posts,
      metadata,
    });
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
