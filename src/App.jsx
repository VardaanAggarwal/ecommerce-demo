import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product-1", price: 100, total: 0 },
    { id: 2, name: "Product-2", price: 200, total: 0 },
    { id: 3, name: "Product-3", price: 300, total: 0 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }

    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id ? { ...item, total: item.total + 1 } : item
      )
    );
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );

      setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === product.id ? { ...item, total: item.total - 1 } : item
        )
      );
    }
  };

  return (
    <>
      <h1>Ecommerce Demo</h1>
      <Products
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Cart cart={cart} />
    </>
  );
}

export default App;
