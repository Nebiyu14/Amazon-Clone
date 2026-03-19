import "./payment.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import useCart from "../../hooks/useCart";
import SingleCartItem from "../cart/singleCartItem/SingleCartItem";
import useAuth from "../../hooks/useAuth";
import CheckoutForm from "../../components/paymentMethods/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "../../components/loading/Loading";
import { toast } from "react-toastify";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Payment() {
  const { user } = useAuth();
  const { state, cartItemCount } = useCart();
  const [clientSecret, setclientSecret] = useState("");
  const navigate = useNavigate();

  const subtotal = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 35 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  // console.log(total)

  const backend_url = import.meta.env.VITE_BACKEND_FIREBASE_BASE_URL;
  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(`${backend_url}/payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ total: total }),
        });
        const data = await response.json();
        setclientSecret(data.client_secret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    fetchClientSecret();
  }, []);

  if (state.cart.length === 0) {
    toast.info("Your cart is empty...", {
      toastId: "empty-cart",
    });
    navigate("/");
    return null;
  }

  if (!clientSecret) {
    return (
      <Layout>
        <Loading message="Loading payment methods..." />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="payment__page__container">
        {/* LEFT SIDE */}
        <div className="payment__page__leftSide">
          <div className="payment__page__title">
            <h1>Review & Pay</h1>
            <p>🔒 Secure Checkout</p>
          </div>
          {/* address */}
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
          {/* items lists */}
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
          {/* payment methods */}
          <div className="payment__page__payment__methods">
            <h3>Payment Method</h3>
            <div>
              {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              )}
            </div>
          </div>
        </div>

        {/* order summary */}
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

          {/* <button className="payment__page__place__order__btn">
            Place Order
          </button> */}
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
