import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Example secure route
router.get("/dashboard", protect, (req, res) => {
  res.json({ message: "Welcome to the secure dashboard" });
});

export default router;
