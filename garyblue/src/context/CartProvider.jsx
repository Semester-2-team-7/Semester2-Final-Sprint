import React, { useState } from "react";
import CartContext from "./cart-contex";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const itemList = [...items];
    const newList = itemList.concat(item);
    const index = newList.indexOf(item);
    newList[index] = { ...newList[index] };

    setItems(newList);
  };

  const removeItemFromCartHandler = (item) => {
    const orginalList = items;
    const newList = orginalList.filter((i) => i.id !== item.id);

    setItems(newList);
  };

  const cartContext = {
    items: items,
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
