import React from "react";
import "./category.css";
import { Link } from "react-router-dom";

function Category({ data }) {
  return (
    <div className="product__category__container">
      {data.map((item) => {
        return (
          <div key={item.id} className="product__card">
            <Link to={`/category/${item.category}`} className="single__card">
              <h3 className="product__title">{item.category}</h3>
              <img src={item.image} alt="" />
              <p>Shop Now</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
