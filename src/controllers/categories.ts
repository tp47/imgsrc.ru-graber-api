import { Request, Response } from "express";
import categoriesModel from "../models/categories";
import { ICategory } from "../utils/types";

const categoriesController = {
  getAll: async (request: Request, response: Response): Promise<void> => {
    const categories: ICategory[] = await categoriesModel.getAll();

    response.status(200).json(categories);
  },
};

export default categoriesController;
