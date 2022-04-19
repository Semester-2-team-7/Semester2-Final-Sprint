import React from "react";
//creates a storage area for cart elements

const CartContex = React.createContext({
  items: [],
  subTotal: 0,
  tax: 0,
  totalAmount: 0,
  pickUpDate: "",

  addItem: (item) => {},
  removeItem: (id) => {},
  getDate: (day) => {},
});

export default CartContex;
