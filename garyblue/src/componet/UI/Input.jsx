import classes from "./Input.module.css";
import React from "react";
// reuseable input feature

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} disabled={props.check} />
    </div>
  );
});

export default Input;
