import React, { useEffect, useState } from "react";
import "./result.css";
import Layout from "../../components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import SingleProduct from "../../components/products/singleProduct/SingleProduct";
export const base__URL = "https://fakestoreapi.com";
import useLoading from "../../hooks/useLoading";
import Loader from "../../components/spinner/Loader";
function Result() {
  const [categorizedItem, setCategorizedItem] = useState([]);
  const { categoryName } = useParams();
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    async function fetchCategory() {
      startLoading();
      try {
        const res = await fetch(
          `${base__URL}/products/category/${categoryName}`
        );
        const data = await res.json();
        setCategorizedItem(data);
      } catch (error) {
        console.log("Error fetching categories", error);
      } finally {
        stopLoading();
      }
    }
    fetchCategory();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Layout>
      <div className="result__container">
        <div>
          <h1>Results</h1>
          <p className="result__path">
            <Link to={"/"}>Categories</Link> / {categoryName}{" "}
          </p>
        </div>
        <div className="result__cards">
          {categorizedItem.map((product) => {
            return <SingleProduct individualItem={product} key={product.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Result;
