import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "./commerce";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartContext";

const ProductDetail = ({
  products,
  filteredproducts,
  updateProductList,
  setFilteredproducts,
  searchquery,
  setSearchquery,
}) => {
  const { addToCart } = useCart();

  const { id } = useParams();

  const product = products.find((p) => p.id === id);
  function stripHtml(html) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  //   function stripHtml(html) {
  //     let doc = new DOMParser().parseFromString(html, "text/html");
  //     return doc.body.textContent || "";
  //   }

  const strippedDescription = stripHtml(product.description);

  return (
    <>
      <Navbar
        products={products}
        setFilteredproducts={setFilteredproducts}
        updateProductList={updateProductList}
        searchquery={searchquery}
        setSearchquery={setSearchquery}
      />
      <div className="d">
        <div className="product d1">
          <img src={product.image.url} alt={product.name} width="200" />
          <h2>{product.name}</h2>
          <p>{strippedDescription}</p>
          <div className="priceandbutton">
            <p>{product.price.formatted} ₹</p>
            <button
              className="addtocart"
              onClick={(e) => {
                // Prevent event from propagating to parent elements
                addToCart(product, 1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="d2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          minus quos numquam animi autem consequatur enim iusto atque, ut
          doloremque illum ullam laudantium unde voluptatibus fuga earum tempore
          consectetur cupiditate?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quisquam, illo rem. Vitae iure accusamus nesciunt,
          pariatur at dolore, facilis eveniet consequuntur repellat suscipit
          nihil, tenetur voluptate sapiente deleniti assumenda animi.
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
