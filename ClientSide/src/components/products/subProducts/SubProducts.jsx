import React, { useEffect, useState } from "react";
import "./subProducts.css";
import SingleProduct from "../singleProduct/SingleProduct";
import useLoading from "../../../hooks/useLoading";
import Loader from "../../spinner/Loader";
import useAuth from "../../../hooks/useAuth";

function SubProducts() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  // const { error, setError } = useAuth();
  const { isLoading, startLoading, stopLoading } = useLoading();
  useEffect(() => {
    async function fetchProducts() {
      startLoading();
      setError(null);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error while fetching data", error);
        setError("We’re having trouble loading products right now");
      } finally {
        stopLoading();
      }
    }
    fetchProducts();
    console.log("error in subproduct:  ", error);
  }, []);

  if (error) return <div className="error_happened">{error}</div>;

  return isLoading ? (
    <Loader />
  ) : (
    <div className="sub__product__container">
      {items.map((singleItem) => {
        return (
          <>
            <SingleProduct individualItem={singleItem} key={singleItem.id} />
          </>
        );
      })}
    </div>
  );
}

export default SubProducts;
