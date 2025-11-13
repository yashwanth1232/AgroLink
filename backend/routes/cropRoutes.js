import express from "express";
import { recommendCrop } from "../controllers/cropController.js";

const router = express.Router();

// POST → Recommend crop based on soil, rainfall, temperature
router.post("/recommend", recommendCrop);

export default router;
