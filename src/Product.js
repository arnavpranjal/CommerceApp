import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { commerce } from "./commerce";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
const Product = (props) => {
  function stripHtml(html) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    console.log(props);
    return doc.body.textContent || "";
  }
  const { addToCart } = useCart();
  const strippedDescription = stripHtml(props.description);
  const [count, setCount] = useState(0);
  return (
    <div key={props.id}>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} width="200" />
        <h2>{props.name}</h2>

        <p>{strippedDescription}</p>
        <p>{props.price} ₹</p>
      </Link>
      <div>
        <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button
        onClick={(e) => {
          // Prevent event from propagating to parent elements
          addToCart(props, count);
          setCount(0);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default Product;
