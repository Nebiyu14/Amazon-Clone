import React, { useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const response = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${import.meta.env.VITE_FRONTEND_BASE_URL}/success`,
      },
    });
    console.log("response of comfirmed payment: ", response);
    if (response.error) {
      console.error(response.error.message);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        style={{ marginTop: "20px" }}
        className="payment__page__place__order__btn"
        type="submit"
        disabled={isLoading || !stripe || !elements}
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

export default CheckoutForm;
