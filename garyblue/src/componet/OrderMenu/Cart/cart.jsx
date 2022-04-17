import React, { useContext } from "react";
import classes from "./cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import Logo from "../../../Images/GaryBlueLogo.png";
import CartContex from "../../../context/cart-contex";

const Cart = (props) => {
  const cartCtx = useContext(CartContex);
  const hasItems = cartCtx.items.length > 0;
  console.log(cartCtx.items);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.item}
          id={item.id}
          price={item.price}
          amount={item.amount}
          itemTotal={item.itemTotal}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}

      <div
        className={`${classes.total} ${classes.grid} ${classes["grid--1x2"]}`}
      >
        <div className={classes.logo}>
          <img src={Logo} alt="Gary Blue Logo" />
        </div>
        <div>
          <div className={classes.checkout}>
            <span>Sub Total:</span>
            <span className={classes.primary}>{`$${cartCtx.subTotal}`} </span>
            <span>Tax:</span>
            <span className={classes.primary}>$37.30</span>
            <span> Total Amount:</span>
            <span className={classes.primary}>$50.64</span>
          </div>

          <div className={classes.actions}>
            <button
              onClick={props.onHideCart}
              className={classes["button--alt"]}
            >
              Close
            </button>
            {hasItems && <button className={classes.button}>Order</button>}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
