import React from "react";
import "./singleCartItem.css";
import NumeralFormat from "../../../components/numeralCurrency/NumeralFormat";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { Type } from "../../../utility/actionType";

function SingleCartItem({ individualItem }) {
  const { state, dispatch, cartItemCount } = useCart();
  const { id, title, price, image, description, rating } = individualItem;
  const increaseQuantity = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item: { id },
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: Type.DECREASE_QUANTITY,
      item: { id },
    });
  };

  const removeItem = () => {
    dispatch({
      type: Type.REMOVE_FROM_CART,
      item: { id },
    });
  };
  return (
    <>
      <div className="cart__page__item__container">
        <Link to={`/product/${individualItem.id}`}>
          <div className="cart__page__image">
            <img src={individualItem.image} alt="Item Image" />
          </div>
        </Link>

        <div className="cart__page__item_details">
          <div className="cart__page__item__title__dtlBtn">
            <div className="cart__page__item__title">
              <Link to={`/product/${individualItem.id}`}>
                {individualItem.title}
              </Link>
            </div>
            <div className="cart__page__item__delete__btn">
              <button>
                <MdOutlineDeleteForever
                  title="Remove Item"
                  onClick={removeItem}
                />
              </button>
            </div>
          </div>
          <div className="cart__page__item__description">
            {individualItem.description}
          </div>
          <div className="cart__page__item__price__quantity">
            <div className="cart__page__item__price">
              <NumeralFormat
                amount={individualItem.price * individualItem.quantity}
              />
            </div>
            <div className="cart__page__item__btn__quantity">
              <button
                className="cart__page__item__decrease__btn"
                onClick={decreaseQuantity}
                title="Less"
              >
                -
              </button>
              <p className="cart__page__item__quantity">
                {individualItem.quantity}
              </p>
              <button
                className="cart__page__add__btn"
                onClick={increaseQuantity}
                title="More"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="cart__page__item__separator__line" />
    </>
  );
}

export default SingleCartItem;
