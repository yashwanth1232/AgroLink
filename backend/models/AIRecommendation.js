import mongoose from "mongoose";

const AIRecommendationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  recommendationReason: {
    type: String,
    required: true,
  },
  confidenceScore: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const AIRecommendation = mongoose.model("AIRecommendation", AIRecommendationSchema);

export default AIRecommendation;
