import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// ✅ Prevent OverwriteModelError
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
