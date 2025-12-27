import React from "react";
import "./product.css";
import Category from "./category/Category";
import products from "./category/categoryInfo";

function Product() {
  return (
    <div className="products">
      <Category data ={products}/>
    </div>
  );
}

export default Product;
