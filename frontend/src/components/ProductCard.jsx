// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card" style={styles.card}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
  },
};

export default ProductCard;
