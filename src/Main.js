import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { commerce } from "./commerce";
import Search from "./Search";
import Cart from "./cart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "./CartContext";

import Footer from "./Footer";
import Navbar from "./Navbar";
const Main = ({
  products,
  filteredproducts,
  updateProductList,
  setFilteredproducts,
  searchquery,
  setSearchquery,
}) => {
  // const [products, setProducts] = useState([]);
  // const [searchquery, setSearchquery] = useState("");
  // const [filteredproducts, setFilteredproducts] = useState([]);

  const { cartItems } = useCart();
  // const updateProductList = () => {
  //   if (searchquery) {
  //     const results = products.filter((product) =>
  //       product.name.toLowerCase().includes(searchquery.toLowerCase())
  //     );
  //     setFilteredproducts(results);
  //   } else {
  //     setFilteredproducts(products); // Display all products if searchQuery is empty
  //   }
  // };

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await commerce.products.list();
  //     setProducts(data);
  //     setFilteredproducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <>
      <Navbar
        products={products}
        setFilteredproducts={setFilteredproducts}
        updateProductList={updateProductList}
        searchquery={searchquery}
        setSearchquery={setSearchquery}
      />
      {/* <navbar className="navbar">
       
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

        <div className="carticon">
          <ShoppingCartIcon
            onClick={() => setShowCart((prevShowCart) => !prevShowCart)}
          />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
          {cartItems.length > 0 && <div className="line"></div>}
        </div>
        {showCart && <Cart className="cart" />}
      </navbar> */}
      <ProductList products={filteredproducts} />;
      <Footer />
    </>
  );
};
export default Main;
