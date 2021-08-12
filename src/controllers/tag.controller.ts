import { NextFunction, Request, Response } from 'express';
import { IPagination } from '../interfaces/common.interface';
import {
  DEFAULT_FIRST_PAGE,
  DEFAULT_LIMIT_PAGE,
} from '../constants/common.constant';

import tagSvc from '../services/tag.service';

export const getTags = async (
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
    const totalTags = await tagSvc.countTags({});
    const metadata: IPagination = {
      page,
      pages: Math.ceil(totalTags / limit),
      total: totalTags,
    };
    const tags = await tagSvc.getTags({ page, limit });
    return res.status(200).json({
      data: tags,
      metadata,
    });
  } catch (error) {
    next(error);
  }
};

export const getTagById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { tagId },
  } = req || {};
  try {
    const tag = await tagSvc.getTagById(tagId);
    return res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};

export const createTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req || {};
  try {
    const tag = await tagSvc.createTag(body);
    return res.status(201).json(tag);
  } catch (error) {
    next(error);
  }
};

export const updateTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { tagId },
    body,
  } = req || {};
  try {
    const tag = await tagSvc.updateTag(tagId, body);
    return res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};

export const deleteTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { tagId },
  } = req || {};
  try {
    const tag = await tagSvc.deleteTag(tagId);
    return res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};
