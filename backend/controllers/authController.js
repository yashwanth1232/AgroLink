import jwt from "jsonwebtoken";
import Farmer from "../models/Farmer.js";

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register Farmer
export const registerFarmer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const farmerExists = await Farmer.findOne({ email });
    if (farmerExists) return res.status(400).json({ message: "Farmer already exists" });

    const farmer = await Farmer.create({ name, email, password });
    const token = generateToken(farmer._id);

    res.status(201).json({ _id: farmer._id, name: farmer.name, email: farmer.email, token });
  } catch (error) {
    res.status(400).json({ message: "Registration failed" });
  }
};

// Login Farmer
export const loginFarmer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const farmer = await Farmer.findOne({ email });
    if (farmer && (await farmer.matchPassword(password))) {
      const token = generateToken(farmer._id);
      res.json({ _id: farmer._id, name: farmer.name, email: farmer.email, token });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};
