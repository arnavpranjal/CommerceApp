import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { commerce } from "./commerce";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import Starating from "./Starating";
const Product = (props) => {
  function stripHtml(html) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    console.log(props);
    return doc.body.textContent || "";
  }
  const { addToCart } = useCart();
  const strippedDescription = stripHtml(props.description);
  const [count, setCount] = useState(0);
  console.log(props);
  return (
    <div key={props.id} className="product">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} width="200" />
        <div className="hkl">
          <h2>{props.name}</h2>
          <Starating rating={(props.price % 5) + 1} />
        </div>
        <p>{strippedDescription}</p>
      </Link>
      <div className="priceandbutton">
        <p>{props.price} ₹</p>
        <button
          className="addtocart"
          onClick={(e) => {
            // Prevent event from propagating to parent elements
            addToCart(props, 1);
            setCount(0);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
