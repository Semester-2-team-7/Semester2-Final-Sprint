import React from "react";
import classes from "./cart.module.css";
import Modal from "../../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        { id: "m1", name: "Sushi", amount: 2, price: 12.99, category: "c2" },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <div>
          <span>SubTotal:</span>
          <span>35</span>
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
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
