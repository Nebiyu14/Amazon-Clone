import React from "react";
import "./singleProduct.css";
import { Rating } from "@mui/material";
import NumeralFormat from "../../numeralCurrency/NumeralFormat";
import { Link } from "react-router-dom";

function SingleProduct({ individualItem }) {
  return (
    <div className="link__format__controller">
      <Link to={`/product/${individualItem.id}`}>
        <div className="product__card__container">
          <div className="product__image">
            <img src={individualItem.image} alt="" />
          </div>
          <div className="single__product__title" title={individualItem.title}>
            <p>{individualItem.title}</p>
          </div>
          <div className="product__rating">
            <p>{individualItem.rating?.rate}</p>
            <Rating
              precision={0.1}
              readOnly
              value={individualItem.rating?.rate || 0}
              size={"small"}
              className="product__rating__stars"
            />
            <p className="product__rating__count">
              ({individualItem.rating?.count})
            </p>
          </div>
          <div className="product__price">
            <NumeralFormat amount={individualItem.price} />
          </div>
          <div className="product__add_to_cart_btn">
            <button>Add to cart</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SingleProduct;
