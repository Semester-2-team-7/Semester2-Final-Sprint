import React from "react";
import classes from "./mealForm.module.css";
import Input from "../../UI/Input";
import CheckBox from "../../UI/CheckBox";

const MealForm = (props) => {
  let price = props.price;
  console.log(price);
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <CheckBox
        label="Add to Cart"
        input={{
          type: "checkbox",
          id: "check_" + props.id,
          value: { price },
        }}
      />
    </form>
  );
};

export default MealForm;
