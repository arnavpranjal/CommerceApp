import React, { useState, useEffect } from "react";
import axios from "axios";
import { commerce } from "./commerce";

import Product from "./Product";
function ProductList({ products }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await commerce.products.list();
  //     // const { data } = await commerce.products.retrieve("prod_BkyN5YDaDxo0b6");
  //     //  const {data} = await commerce.products.retrieve(productId);
  //     //   setProduct(response);
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);
  // console.log(products);
  return (
    <div className="opp">
      <h1>Products</h1>
      <div className="grid">
        {products.map((product) => (
          <Product
            key={product.id} // <-- Unique key prop for each product
            id={product.id}
            image={product.image.url}
            name={product.name}
            description={product.description}
            price={product.price.formatted}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
