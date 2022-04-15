import React from "react";
import classes from "./card.module.css";

const MenuCard = (props) => {
  return <div className={classes.cardMenu}>{props.children}</div>;
};

export default MenuCard;
