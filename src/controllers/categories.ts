import { Request, Response } from "express";
import categoriesModel, { ICategory } from "../model/categories";

const categoriesController = {
  getAll: async (request: Request, response: Response): Promise<void> => {
    const categories: ICategory[] = await categoriesModel.getAll();

    response.status(200).json(categories);
  },
};

export default categoriesController;
