import { Application } from "express";
import categoriesRoute from "./categories";

export default (app: Application) => {
  app.use("/api/categories", categoriesRoute);
};
