import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "../utility/reducerFunction";
import getTotalQuantity from "../utility/totalCartQuantity";

const initialCartState = { cart: [] };
export const cartData = createContext();
function CartContext({ children }) {
  // Load cart from localStorage on component mount
  const getInitialCart = () => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? { cart: JSON.parse(storedCart) } : initialCartState;
    } catch {
      return initialCartState;
    }
  };
  const [state, dispatch] = useReducer(reducer, getInitialCart());

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  //cart count
  const cartItemCount = getTotalQuantity(state.cart);
  return (
    <cartData.Provider value={{ state, dispatch, cartItemCount }}>
      {children}
    </cartData.Provider>
  );
}

export default CartContext;
