import React from "react";
import classes from "./mealItem.module.css";
import MealForm from "./mealForm";

const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li key={props.id} className={classes.meal}>
      <div className={`${classes["menu-tab"]} ${classes.flex}`}>
        <div className={classes["menu-item"]}>
          <h3 className={classes.menu__header}>{props.name}</h3>
          <p className={classes.menu__body}>{props.description}</p>
        </div>
        <div className={`${classes.badge} ${classes["badge--primary"]} `}>
          {price}
        </div>
        <div className={classes.form}>
          <MealForm price={props.price} id={props.id} name={props.name} />
        </div>
      </div>
    </li>
  );
};

export default MealItems;
