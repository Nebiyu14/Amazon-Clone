import "./payment.css";
import Layout from "../../components/layout/Layout";
import useCart from "../../hooks/useCart";
import SingleCartItem from "../cart/singleCartItem/SingleCartItem";
import useAuth from "../../hooks/useAuth";

function Payment() {
  const { user } = useAuth();
  const { state, dispatch, cartItemCount } = useCart();

  const subtotal = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 35 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <Layout>
      <div className="payment__page__container">
        {/* LEFT SIDE */}
        <div className="payment__page__leftSide">
          <div className="payment__page__title">
            <h1>Review & Pay</h1>
            <p>🔒 Secure Checkout</p>
          </div>

          <div className="payment__page__address">
            <div>
              <h3>Shipping Address</h3>
            </div>
            <div>
              <p className="payment__page__address__name">
                {user?.displayName ||
                  user?.email?.split("@")[0] ||
                  "Abebe Desalegn"}
              </p>
              <p>{user?.email}</p>
              <p>
                2491 Reel Avenue, Apt 4B, Albuquerque, NM 87102, United States
              </p>
            </div>
          </div>

          <div className="payment__page__cart__items">
            <div>
              <h3>Review Items ({cartItemCount})</h3>
            </div>
            <div>
              {state.cart.map((individualItem) => (
                <SingleCartItem
                  individualItem={individualItem}
                  key={individualItem.id}
                  hideContent={true}
                />
              ))}
            </div>
          </div>

          <div className="payment__page__payment__methods">
            <h3>Payment Method</h3>
            <p>Stripe payment integration coming soon.</p>
            {/* <button className="payment__page__place__order__btn">
              Place Order
            </button> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="payment__page__rightSide">
          <h3>Order Summary</h3>

          <div className="payment__page__summary__row">
            <span>Subtotal ({cartItemCount} items)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="payment__page__summary__row">
            <span>Shipping</span>
            <span className={shipping === 0 ? "payment__page__free" : ""}>
              {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="payment__page__summary__row">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="payment__page__summary__divider" />

          <div className="payment__page__summary__row payment__page__summary__total">
            <span>Order Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="payment__page__place__order__btn">
            Place Order
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
