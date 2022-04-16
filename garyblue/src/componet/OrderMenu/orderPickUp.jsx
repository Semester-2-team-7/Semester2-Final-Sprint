import React, { useState } from "react";
import classes from "./orderPickUp.module.css";
import PickUpBox from "./pickUpBox";

// contains the Pick up box with some text

const OrderPickUp = () => {
  return (
    <section className={classes.pick}>
      <h2>Gary's Favorties, Ready For Pick Up in 20 minutes</h2>
      <p>
        {" "}
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious at any time of the day.
      </p>
      <div className={classes["date-container"]}>
        <div className={classes.date}>
          <PickUpBox />
        </div>
      </div>
    </section>
  );
};

export default OrderPickUp;
