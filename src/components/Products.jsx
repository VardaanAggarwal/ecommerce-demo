import React from "react";

const Products = ({ products, addToCart, removeFromCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - Quantity: {product.total}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <button onClick={() => handleRemoveFromCart(product)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
