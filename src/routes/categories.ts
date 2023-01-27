import { Router } from "express";
import categoriesController from "../controllers/categories";

const router = Router();

router.get("/all", categoriesController.getAll);

export default router;
