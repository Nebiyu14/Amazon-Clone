import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Signin from "../pages/auth/Signin";
import Payment from "../pages/payment/Payment";
import Orders from "../pages/orders/Orders";
import Cart from "../pages/cart/Cart";
import Result from "../pages/result/Result";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Success from "../pages/success/Success";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoutes from "../components/protectedRoute/ProtectedRoutes";
import PageNotFound from "../components/pageNoteFound/PageNotFound";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoutes
              message="You need to sign in to access the payment page"
              redirect="/payment"
            >
              <Payment />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoutes
              message="You need to sign in to access the orders page"
              redirect="/orders"
            >
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/success"
          element={
            <Elements stripe={stripePromise}>
              <Success />
            </Elements>
          }
        />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
