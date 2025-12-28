import React, { useEffect, useState } from "react";
import "./subProducts.css";
import SingleProduct from "../singleProduct/SingleProduct";
import useLoading from "../../../hooks/useLoading";
import Loader from "../../spinner/Loader";

function SubProducts() {
  const [items, setItems] = useState([]);
  const { isLoading, startLoading, stopLoading } = useLoading();
  useEffect(() => {
    async function fetchProducts() {
      startLoading();
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error while fetching data", error);
      } finally {
        stopLoading();
      }
    }
    fetchProducts();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
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
