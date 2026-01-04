import "./cart.css";
import Layout from "../../components/layout/Layout";
import useCart from "../../hooks/useCart";
import SingleCartItem from "./singleCartItem/SingleCartItem";
import { Link } from "react-router-dom";
import NumeralFormat from "../../components/numeralCurrency/NumeralFormat";
import { calculatedTotalPriceCart } from "../../utility/totalCartPrice";
function Cart() {
  const { state, dispatch, cartItemCount } = useCart();
  const totalPrice = calculatedTotalPriceCart(state.cart);
  console.log(state);

  return (
    <Layout>
      <div className="cart_page_container">
        <div className="cart__page__leftside">
          <div className="cart__page__header">
            <h2 className="cart__page__title">Shopping Cart</h2>
            <hr className="cart__page__horizontal_line" />
          </div>
          {state.cart.length === 0 ? (
            <div className="cart__page__cart__empty">
              <p className="cart__empty">Your Cart Is Empty</p>

              <p className="go_for_shopping_link">
                <Link to={"/"}>Go For Shopping</Link>
              </p>
            </div>
          ) : (
            <div className="cart__page__item_list">
              {state.cart.map((individualItem) => {
                return (
                  <SingleCartItem
                    individualItem={individualItem}
                    key={individualItem.id}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="cart__page__rightside__checkout">
          <div className="cart__page__total_payment__container">
            <div className="cart__page__subtotal">
              Subtotal {cartItemCount} item(s):{" "}
              <NumeralFormat amount={totalPrice} />
            </div>
            <hr />
          </div>
          <div className="cart__page__proceed_to_checkout">
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
