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

  const updateItems = items.concat();
  const newSubtotal = updateItems.map((item) => {
    let newAmount = item.price * item.amount;
    return newAmount;
  });
  let sum = 0;
  for (let i = 0; i < newSubtotal.length; i++) {
    sum += newSubtotal[i];
  }
  let tax = sum * 0.15;
  let total = tax + sum;

  const cartContext = {
    items: items,
    subTotal: sum.toFixed(2),
    tax: tax.toFixed(2),
    totalAmount: total.toFixed(2),
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
