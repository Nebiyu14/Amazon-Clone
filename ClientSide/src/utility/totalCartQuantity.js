//calculate the total number of quantity in the cart

function getTotalQuantity(cart) {
  return cart.reduce((total_quantity, item) => {
    return total_quantity + item.quantity;
  }, 0);
}

export default getTotalQuantity;
