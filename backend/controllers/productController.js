import Product from "../models/Product.js";

// Get all products (public)
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Create new product (farmer only)
export const createProduct = async (req, res) => {
  const { name, price, quantity } = req.body;

  try {
    const product = await Product.create({
      name,
      price,
      quantity,
      farmer: req.user.id,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "Failed to add product" });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.farmer.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    const updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Failed to update product" });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.farmer.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await Product.deleteOne({ _id: id });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete product" });
  }
};
