import React, { useEffect, useState } from "react";
import "./result.css";
import Layout from "../../components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import SingleProduct from "../../components/products/singleProduct/SingleProduct";
export const base__URL = "https://fakestoreapi.com";
function Result() {
  const [categorizedItem, setCategorizedItem] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    try {
      async function fetchCategory() {
        const res = await fetch(
          `${base__URL}/products/category/${categoryName}`
        );
        const data = await res.json();
        setCategorizedItem(data);
      }
      fetchCategory();
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  }, []);

  return (
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
