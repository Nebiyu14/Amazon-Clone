import React, { createContext, useReducer } from "react";
import { initialCartState, reducer } from "../utility/reducerFunction";
import getTotalQuantity from "../utility/totalCartQuantity";

export const cartData = createContext();
function CartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialCartState);
  //cart count
  const cartItemCount = getTotalQuantity(state.cart);
  return (
    <cartData.Provider value={{ state, dispatch, cartItemCount }}>
      {children}
    </cartData.Provider>
  );
}

export default CartContext;
