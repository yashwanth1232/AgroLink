import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "200px" }}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Quantity: {product.quantity} kg</p>
    </div>
  );
}

export default ProductCard;
