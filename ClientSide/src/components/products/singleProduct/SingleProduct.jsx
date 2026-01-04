import React, { useContext, useState } from "react";
import "./singleProduct.css";
import { Rating } from "@mui/material";
import NumeralFormat from "../../numeralCurrency/NumeralFormat";
import { Link } from "react-router-dom";
import { Type } from "../../../utility/actionType";
import useCart from "../../../hooks/useCart";
import { toast } from "react-toastify";

function SingleProduct({ individualItem }) {
  const { dispatch } = useCart();
  const { id, title, price, image, description, rating } = individualItem;
  const [clicked, setClicked] = useState(false);

  const addToCart = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100);
    dispatch({
      type: Type.ADD_TO_CART,
      item: { id, title, price, image, description, rating },
    });
    toast.info(`Item added to the cart!`, { position: "bottom-right" });
  };

  return (
    <div className="link__format__controller">
      <div className="product__card__container">
        <Link to={`/product/${individualItem.id}`}>
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
        </Link>
        <div className="product__add_to_cart_btn">
          <button onClick={addToCart} className={clicked ? "flash" : ""}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
