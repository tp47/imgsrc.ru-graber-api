import { Router } from "express";
import categoriesController from "../controllers/categories";

const router = Router();

router.get("/", categoriesController.getAll);
router.get("/:id", categoriesController.getOne);

export default router;
