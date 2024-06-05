import React, { useState } from "react";
import Hero2 from "./Hero2"; // Adjust the import path as necessary
import ShoppingCart from "./ShoppingCart"; // Adjust the import path as necessary

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (plant) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...plant, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Hero2 onAddToCart={handleAddToCart} />
      <ShoppingCart
        cartItems={cartItems}
        handleQuantityChange={handleQuantityChange}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default ParentComponent;
