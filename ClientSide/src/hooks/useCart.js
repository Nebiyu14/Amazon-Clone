import { useContext } from "react";
import { cartData } from "../context/CartContext";

function useCart() {
  const cartContextGlobal = useContext(cartData);
  if (!cartContextGlobal) {
    throw new Error("useCart must be used inside a provider");
  }
  return cartContextGlobal;
}

export default useCart;
