import React from "react";
import classes from "./card.module.css";

// style card to wrap elements

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
