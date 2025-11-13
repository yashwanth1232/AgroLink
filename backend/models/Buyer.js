import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "buyer" }
});

export default mongoose.model("Buyer", buyerSchema);
