import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import aiRoutes from "./routes/airoutes.js";

dotenv.config();
connectDB();

const app = express();

// Allowed frontend URLs
const allowedOrigins = [
  "http://localhost:5173",               // local frontend dev
  "https://agro-link-frontend.vercel.app", // YOUR VERCEL URL (replace with exact one)
];

// CORS setup
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow mobile apps / postman
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("CORS blocked"));
  },
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/ai", aiRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
