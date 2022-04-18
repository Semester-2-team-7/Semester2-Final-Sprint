import React, { useState, useEffect } from "react";
import CartContext from "./cart-contex";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [tax, setTax] = useState(0);
  const [subTotal, SetSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    const updateItems = items.concat();
    const newSubtotal = updateItems.map((item) => {
      let newAmount = item.price * item.amount;
      return newAmount;
    });
    let sum = 0;
    for (let i = 0; i < newSubtotal.length; i++) {
      sum += newSubtotal[i];
    }
    SetSubTotal(sum);
    let hst = subTotal * 0.15;
    setTax(hst);
    let total = tax + subTotal;
    setTotal(total);
  }, [addItemToCartHandler, removeItemFromCartHandler]);

  const cartContext = {
    items: items,
    subTotal: subTotal.toFixed(2),
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
