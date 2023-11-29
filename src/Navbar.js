import Search from "./Search";
import Cart from "./cart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "./CartContext";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = ({
  products,
  setFilteredproducts,
  updateProductList,
  searchquery,
  setSearchquery,
}) => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };
  //   const updateProductList = () => {
  //     if (searchquery) {
  //       const results = products.filter((product) =>
  //         product.name.toLowerCase().includes(searchquery.toLowerCase())
  //       );
  //       setFilteredproducts(results);
  //     } else {
  //       setFilteredproducts(products); // Display all products if searchQuery is empty
  //     }
  //   };
  return (
    <navbar className="navbar">
      {/* <div>Hello!</div> */}
      <div className="logo">
        <h3>Ecommerce...</h3>
      </div>
      <div className="search">
        <Search
          searchquery={searchquery}
          setSearchquery={setSearchquery}
          handleEnter={updateProductList}
        />
      </div>
      {/* <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div> */}
      <div className="carticon">
        <ShoppingCartIcon onClick={handleClick} />

        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
        {cartItems.length > 0 && <div className="line"></div>}
      </div>
    </navbar>
  );
};
export default Navbar;
