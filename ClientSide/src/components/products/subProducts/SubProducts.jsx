import React, { useEffect, useState } from "react";
import "./subProducts.css";
import SingleProduct from "../singleProduct/SingleProduct";

function SubProducts() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      async function fetchProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItems(data);
      }
      fetchProducts();
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  }, []);
  return (
    <div className="sub__product__container">
      {items.map((singleItem) => {
        return (
          <SingleProduct individualItem={singleItem} key={singleItem.id} />
        );
      })}
    </div>
  );
}

export default SubProducts;
