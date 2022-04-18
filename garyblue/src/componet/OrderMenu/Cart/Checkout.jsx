import clasess from "./Checkout.module.css";
import React from "react";

export const Checkout = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={clasess.form} onSubmit={onSubmit}>
      <div className={clasess.control}>
        <label htmlFor="name"> Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={clasess.control}>
        <label htmlFor="address"> Street Address</label>
        <input type="text" id="address" />
      </div>
      <div className={clasess.control}>
        <label htmlFor="city"> City</label>
        <input type="text" id="city" />
      </div>
      <div className={clasess.control}>
        <label htmlFor="phone"> Phone Number</label>
        <input type="tel" id="phone" />
      </div>
      <div className={clasess.actions}>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
