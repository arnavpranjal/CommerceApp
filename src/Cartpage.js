import React from "react";
import { useCart } from "./CartContext";
const Cartpage = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getTotalPrice,
    removeCart,
    incrementCart,
  } = useCart();
  console.log({ cartItems });
  console.log(getTotalPrice());
  return (
    <>
      <h1>cart</h1>
      {cartItems.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cartCard">
              <img src={item.image} alt={item.name} className="cartImage" />
              <h3>{item.name}</h3>
              <div>
                <button onClick={() => removeCart(item)}>-</button>
                <span>{item.quantity}</span> {/* Displaying quantity */}
                <button onClick={() => incrementCart(item)}>+</button>
              </div>
              <div>{item.quantity * item.price}</div>
              <div>
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </div>
            </div>
          ))}
          <button onClick={() => clearCart()}>X</button>
          <div>Total Price: {getTotalPrice()}</div>
        </>
      )}
    </>
  );
};

export default Cartpage;
