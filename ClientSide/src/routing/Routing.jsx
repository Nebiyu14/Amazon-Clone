import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Signin from "../pages/auth/Signin";
import Payment from "../pages/payment/Payment";
import Orders from "../pages/orders/Orders";
import Cart from "../pages/cart/Cart";
import Result from "../pages/result/Result";
import ProductDetail from "../pages/productDetail/ProductDetail";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/category/:categoryName" element={<Result />} />
      </Routes>
    </div>
  );
}

export default Routing;
