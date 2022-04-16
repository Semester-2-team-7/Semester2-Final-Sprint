import React, { useContext } from "react";
import classes from "./cart.module.css";
import Modal from "../../UI/Modal";

import CartContex from "../../../context/cart-contex";

const Cart = (props) => {
  const cartCtx = useContext(CartContex);
  const hasItems = cartCtx.items.length > 0;
  console.log(cartCtx.items);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={classes["cart-items"]}>
          <h2>{item.item}</h2>
          <div>
            <span>{`$${item.price}`}</span>
            <span>{`${item.amount}${item.itemTotal}`} </span>
            <span></span>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <div>
          <span>Sub Total:</span>
          <span>{cartCtx.subTotal} </span>
        </div>
        <div>
          <span>Tax:</span>
          <span>37</span>
        </div>
        <div>
          <span>Total Amount:</span>
          <span>40.62</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onHideCart} className={classes["button--alt"]}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
