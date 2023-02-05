import { Request, Response } from "express";
import categoriesModel from "../models/categories";
import { ICategory, IAlbum, ICategoryRequest } from "../utils/types";
import { PARSING_HOST } from "../utils/consts";

const categoriesController = {
  getAll: async (request: Request, response: Response): Promise<void> => {
    try {
      const categories: ICategory[] = await categoriesModel.getAll();
      response.status(200).json(categories);
    } catch (error) {
      response.status(500).end();
    }
  },
  getOne: async (
    request: Request<ICategoryRequest>,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const page = Number(request.query.page) || undefined;
      const likes = Number(request.query.likes) || undefined;
      const albums: IAlbum[] = await categoriesModel.getOne(id, page, likes);
      response.status(200).json(albums);
    } catch (error) {
      response.status(500).end();
    }
  },
};

export default categoriesController;
