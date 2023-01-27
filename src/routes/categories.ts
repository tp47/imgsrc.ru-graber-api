import express from 'express';
import categoriesController from "../controllers/categories";

const router = express.Router();

router.get("/all", categoriesController.getAll);

export default router;
