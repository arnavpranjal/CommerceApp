import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "./commerce";
const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchAllProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
      setLoading(false);
    };

    fetchAllProducts();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

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
    <div>
      <img src={product.image.url} alt={product.name} width="200" />
      <h2>{product.name}</h2>
      <p>{strippedDescription}</p>
      <p>{product.price.formatted} ₹</p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam minus
      quos numquam animi autem consequatur enim iusto atque, ut doloremque illum
      ullam laudantium unde voluptatibus fuga earum tempore consectetur
      cupiditate?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Quisquam, illo rem. Vitae iure accusamus nesciunt, pariatur at dolore,
      facilis eveniet consequuntur repellat suscipit nihil, tenetur voluptate
      sapiente deleniti assumenda animi.
    </div>
  );
};

export default ProductDetail;
