// import logo from './logo.svg';
// import './App.css';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { commerce } from "./commerce";
import ProductList from "./ProductList";
import Main from "./Main";
import { CartProvider } from "./CartContext";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Cartpage from "./Cartpage";
function App() {
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);

  const [searchquery, setSearchquery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
      setFilteredproducts(data);
    };

    fetchProducts();
  }, []);
  const updateProductList = () => {
    if (searchquery) {
      navigate("/");
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchquery.toLowerCase())
      );
      setFilteredproducts(results);
    } else {
      navigate("/");
      setFilteredproducts(products); // Display all products if searchQuery is empty
    }
  };
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                products={products}
                filteredproducts={filteredproducts}
                updateProductList={updateProductList}
                setFilteredproducts={setFilteredproducts}
                searchquery={searchquery}
                setSearchquery={setSearchquery}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                products={products}
                filteredproducts={filteredproducts}
                updateProductList={updateProductList}
                setFilteredproducts={setFilteredproducts}
                searchquery={searchquery}
                setSearchquery={setSearchquery}
              />
            }
          />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
