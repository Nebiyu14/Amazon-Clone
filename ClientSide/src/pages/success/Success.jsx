import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./success.css";
import { useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Loading from "../../components/loading/Loading";

function Success() {
  const stripe = useStripe();
  const [queryParams] = useSearchParams();
  const [status, setStatus] = useState("loading");
  const { state, dispatch } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = queryParams.get("payment_intent_client_secret");
    const paymentIntentId = queryParams.get("payment_intent");
    if (!clientSecret) {
      setStatus("error");
      return;
    }

    //retrieve payment intent and user details from stripe
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(async ({ paymentIntent }) => {
        console.log(paymentIntent);
        switch (paymentIntent.status) {
          case "succeeded":
            //save order details to firestore
            const orderData = doc(
              db,
              "users",
              user.uid,
              "orders",
              paymentIntentId,
            );
            //to prevent duplicate orders
            const existingOrder = await getDoc(orderData);

            if (!existingOrder.exists()) {
              await setDoc(orderData, {
                paymentIntentId: paymentIntent.id,
                amount: paymentIntent.amount,
                items: state.cart,
                createdAt: serverTimestamp(),
                status: "paid",
                userEmail: user.email,
                userName:
                  user.displayName || user.email?.split("@")[0] || "User",
              });
            }

            setStatus("success");
            dispatch({ type: "CLEAR_CART" });
            break;

          case "processing":
            setStatus("processing");
            break;

          case "requires_payment_method":
            setStatus("failed");
            break;

          default:
            setStatus("error");
        }
      });
  }, [stripe, queryParams]);
  return (
    <Layout>
      <div className="success__container">
        {status === "loading" && (
          <Loading message="Checking payment status..." />
        )}

        {status === "success" && (
          <div className="success__content">
            <p className="success__tag">Order Confirmed</p>
            <h1 className="success__title">Thank You for Your Purchase!</h1>
            <p className="success__message">
              Your order has been placed successfully.
            </p>
            <Link to="/" className="success__btn__primary">
              Continue Shopping
            </Link>
            <Link to="/orders" className="success__btn__secondary">
              Go to Orders
            </Link>
          </div>
        )}

        {status === "processing" && <h2>Payment is processing...</h2>}

        {status === "failed" && (
          <h2 className="success__status__failed">
            Payment failed. Please try again.
          </h2>
        )}

        {status === "error" && (
          <h2 className="success__status__error">Something went wrong.</h2>
        )}
      </div>
    </Layout>
  );
}

export default Success;

// http://localhost:5005/success?payment_intent=pi_3TCcJbPyxQinGIpZ02PAZvK0&payment_intent_client_secret=pi_3TCcJbPyxQinGIpZ02PAZvK0_secret_HCA30pm5p0hdwaNFzJR5cd6e2&redirect_status=failed
