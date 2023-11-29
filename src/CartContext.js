import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCost, setCartCost] = useState(0);
  console.log(cartCost);
  const addToCart = (product, count) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    console.log(product);

    if (existingProduct) {
      // If product exists, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + count }
            : item
        )
      );
    } else {
      // If product doesn't exist, add it with the count as quantity
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, quantity: count },
      ]);
    }
  };
  const removeCart = (it) => {
    if (it.quantity === 1) {
      // If product exists, update the quantity
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== it.id)
      );
    } else {
      // If product doesn't exist, add it with the count as quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === it.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };
  const incrementCart = (it) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === it.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        removeCart,
        incrementCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
