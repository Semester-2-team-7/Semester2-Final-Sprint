import React, { useContext, useState } from "react";
import classes from "./cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import Logo from "../../../Images/GaryBlueLogo.png";
import Checkout from "./Checkout";
import CartContex from "../../../context/cart-contex";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setdidSubmit] = useState(false);
  const [name, setName] = useState("");

  const cartCtx = useContext(CartContex);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem({ ...item, amount: 1 });
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const submitOrderHandler = async (data) => {
    setName(data.name);
    setIsSubmitting(true);
    await fetch(
      "https://react-http-f1a28-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: data,
          orderedItems: cartCtx.items,
          total: cartCtx.totalAmount,
        }),
      }
    );
    setIsSubmitting(false);
    setdidSubmit(true);
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={props.onHideCart} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.item}
          id={item.id}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
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
          {showCheckout && (
            <Checkout
              onCancel={props.onHideCart}
              onConfirm={submitOrderHandler}
            />
          )}
          {!showCheckout && modalActions}
        </div>
      </div>
    </React.Fragment>
  );

  const loadingModal = <p>Confirming Order Data</p>;

  const confrimedOrder = (
    <React.Fragment>
      <p className={classes.confirmation}>
        Sucessfully sent order. {name} your order will ready for pick up at{" "}
        {cartCtx.pickUpDate}
      </p>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button"]}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && loadingModal}
      {didSubmit && confrimedOrder}
    </Modal>
  );
};

export default Cart;
