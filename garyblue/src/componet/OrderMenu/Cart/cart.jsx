import React, { useContext } from "react";
import classes from "./cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import Logo from "../../../Images/GaryBlueLogo.png";
import CartContex from "../../../context/cart-contex";

const Cart = (props) => {
  const cartCtx = useContext(CartContex);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem({ ...item, amount: 1 });
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
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
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item)}
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
            <span className="m-3">Tax:</span>
            <span className={classes.primary}>{`$${cartCtx.tax}`}</span>
            <div>
              <span> Total Amount:</span>
              <span
                className={classes.primary}
              >{`$${cartCtx.totalAmount}`}</span>
            </div>
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
