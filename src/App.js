// import logo from './logo.svg';
// import './App.css';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { commerce } from "./commerce";
import ProductList from "./ProductList";
import Main from "./Main";
import { CartProvider } from "./CartContext";

import ProductDetail from "./ProductDetail";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
