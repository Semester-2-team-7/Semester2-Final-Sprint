import React from "react";
import classes from "./CheckBox.module.css";

// reuseable checkbox feature

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        id={props.id}
        value={props.value}
        name={props.name}
        checked={props.check}
        onChange={props.onCheck}
        {...props.input}
      />
    </div>
  );
};

export default Input;
