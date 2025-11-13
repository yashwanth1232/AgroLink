import React, { useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Organic Wheat", price: "₹1200/quintal", stock: 50 },
    { id: 2, name: "Fertilizer (Urea)", price: "₹950/bag", stock: 30 },
    { id: 3, name: "Pesticide", price: "₹400/litre", stock: 20 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "" });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return alert("Please fill all fields");
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">🌾 Manage Products</h1>

      {/* Product Input Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            className="border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="mt-4 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-green-700">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <p className="text-sm text-gray-500 mb-3">Stock: {product.stock}</p>
            <button
              onClick={() => handleDelete(product.id)}
              className="text-sm bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
