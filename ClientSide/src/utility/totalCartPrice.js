//total calculated price of items in the cart

function calculatedTotalPriceCart(cart) {
  return cart.reduce((totalPrice, eachItem) => {
    return totalPrice + eachItem.price * eachItem.quantity;
  }, 0);
}

export { calculatedTotalPriceCart };
