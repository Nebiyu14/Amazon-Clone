import React, { useContext } from "react";
import "./productDetailPage.css";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import NumeralFormat from "../../../components/numeralCurrency/NumeralFormat";
import { Type } from "../../../utility/actionType";
import useCart from "../../../hooks/useCart";
import { toast } from "react-toastify";

function ProductDetailPage({ individualItem }) {
  const { dispatch } = useCart();
  const { id, title, price, image, rating, description } = individualItem;

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item: { id, title, price, image, rating, description, quantity: 1 },
    });
    toast.info(`Item added to the cart!`, { position: "bottom-right" });
  };
  return (
    <>
      <div className="product__page__path"></div>
      <div className="product__page__card__container">
        <div className="product__page__image">
          <img src={individualItem.image} alt="" />
        </div>
        <div className="product__content">
          <div className="single__product__page__title">
            <h2>{individualItem.title}</h2>
          </div>
          <div className="product__page__description">
            <h3>About This Item:</h3>
            <p>{individualItem.description}</p>
          </div>
          <div className="product__page__rating">
            <p>{individualItem.rating?.rate}</p>
            <Rating
              precision={0.1}
              value={individualItem.rating?.rate || 0}
              size={"small"}
              readOnly
              className="product__page__rating__stars"
            />
            <p className="product__page__rating__count">
              ({individualItem.rating?.count})
            </p>
          </div>
          <div className="product__page__price">
            <NumeralFormat amount={individualItem.price} />
          </div>
          <div className="product__page__add_to_cart_btn">
            <button onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
