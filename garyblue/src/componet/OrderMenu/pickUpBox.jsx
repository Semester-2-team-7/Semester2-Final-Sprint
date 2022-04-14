import React, { useState } from "react";
import classes from "./pickUpBox.module.css";

const currentDate = new Date().toISOString().split("T")[0];

const addDays = (date, days) => {
  let res = new Date(date);
  res.setDate(res.getDate() + days);
  return res.toISOString().split("T")[0];
};

let maxDate = addDays(currentDate, 5);

let twentyMinutesLater = new Date();
twentyMinutesLater.setMinutes(twentyMinutesLater.getMinutes() + 20);

const day = twentyMinutesLater.toLocaleString("en-US").split(",")[1];

console.log(day);

const PickUpBox = () => {
  const [date, setDate] = useState(currentDate);

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  return (
    <React.Fragment>
      <span className={classes.date}>
        <form>
          <div className={classes["date--control"]}>
            <label>Date</label>
            <input
              type="date"
              min={currentDate}
              max={maxDate}
              value={date}
              onChange={dateChangeHandler}
            />
          </div>
        </form>
        <span className={classes.time}>{`Pick Up Time: ${day}`}</span>
      </span>{" "}
    </React.Fragment>
  );
};

export default PickUpBox;
