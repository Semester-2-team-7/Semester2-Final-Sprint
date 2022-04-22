import React, { useState, useContext, useRef, useEffect } from "react";
import classes from "./mealForm.module.css";
import Input from "../../UI/Input";
import CheckBox from "../../UI/CheckBox";
import CartContex from "../../../context/cart-contex";

const MealForm = (props) => {
  const amountInputRef = useRef();
  const [amountisValid, setAmountisValid] = useState(true);
  const cartCtx = useContext(CartContex);
  const [isChecked, setIsChecked] = useState(false);

  const check_id = "check_" + props.id;
  // const [isChecked, setIsChecked] = useState(() => {
  //   const saved = localStorage.getItem("checked_" + check_id);
  //   const initialValue = saved;
  //   return initialValue || false;
  // });

  const localStorageName = "checked_" + check_id;

  useEffect(() => {
    const saved = localStorage.getItem(localStorageName);
    if (saved) {
      setIsChecked(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(isChecked));
  }, [isChecked]);

  const handleOnCheck = (event) => {
    setIsChecked(!isChecked);

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountisValid(false);
      return;
    }
    let price = event.target.value;
    let updatedPrice = +price;
    // let amount = updatedPrice * enteredAmountNumber.toFixed(2);
    if (!isChecked) {
      cartCtx.addItem({
        id: event.target.id,
        item: event.target.name,
        price: updatedPrice,
        // itemTotal: amount,
        amount: enteredAmountNumber,
      });
    } else {
      cartCtx.removeItem({
        id: event.target.id,
        item: event.target.name,
        price: updatedPrice,
        // itemTotal: amount,
        amount: enteredAmountNumber,
      });
    }
  };

  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        check={isChecked}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <CheckBox
        check={isChecked}
        onCheck={handleOnCheck}
        label="Add to Cart"
        input={{
          type: "checkbox",
          id: check_id,
          value: props.price,
          name: props.name,
        }}
      />
      {!amountisValid && <p>Please enter a valid amount (1-10)</p>}
    </form>
  );
};

export default MealForm;
