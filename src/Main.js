import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { commerce } from "./commerce";
import Search from "./Search";
import Cart from "./cart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [searchquery, setSearchquery] = useState("");
  const [filteredproducts, setFilteredproducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const updateProductList = () => {
    if (searchquery) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchquery.toLowerCase())
      );
      setFilteredproducts(results);
    } else {
      setFilteredproducts(products); // Display all products if searchQuery is empty
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
      setFilteredproducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Search
        searchquery={searchquery}
        setSearchquery={setSearchquery}
        handleEnter={updateProductList}
      />
      {/* <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div> */}
      <div>
        <ShoppingCartIcon
          onClick={() => setShowCart((prevShowCart) => !prevShowCart)}
        />
      </div>
      {showCart && <Cart />}
      <ProductList products={filteredproducts} />;
    </>
  );
};
export default Main;
