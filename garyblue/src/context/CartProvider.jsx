import React from "react";
import CartContext from "./cart-contex";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    subTotal: 0,
    tax: 0,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeitem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
