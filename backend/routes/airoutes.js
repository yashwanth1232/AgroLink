import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import AIRecommendation from "../models/AIRecommendation.js";

const router = express.Router(); // ✅ Define router before using it

// Fetch recommendations for logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const recs = await AIRecommendation.find({ userId: req.user._id })
      .populate("productId");
    res.json(recs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recommendations", error });
  }
});

export default router;
