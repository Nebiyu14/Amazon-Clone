import { Type } from "./actionType";

const initialCartState = { cart: [] };

function reducer(state, action) {
  //add to cart
  switch (action.type) {
    case Type.ADD_TO_CART:
      //1. check if exist
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === action.item.id
      );
      //2. if exist => increase quantity
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === action.item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      //3. if not exist => add as a new item
      else {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, quantity: 1 }],
        };
      }

    case Type.DECREASE_QUANTITY:
      // Method I
      const updatedCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        } else return cartItem;
      });

      const filteredcart = updatedCart.filter(
        (cartItem) => cartItem.quantity > 0
      );

      return {
        ...state,
        cart: filteredcart,
      };

    // Method II
    // //1. check if exist
    // const isItemExist = state.cart.find(
    //   (cartItem) => cartItem.id === action.item.id
    // );
    // //2. if exist => decrease quantity
    // if (isItemExist) {
    //   return {
    //     ...state,
    //     cart: state.cart
    //       .map((cartItem) =>
    //         cartItem.id === action.item.id
    //           ? { ...cartItem, quantity: cartItem.quantity - 1 }
    //           : cartItem
    //       )
    //       .filter((cartItem) => cartItem.quantity > 0),
    //   };
    // }

    
    case Type.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.item.id),
      };

    default:
      return state;
  }
}

export { initialCartState, reducer };
