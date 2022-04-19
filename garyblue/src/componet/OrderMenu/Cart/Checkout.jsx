import React, { useRef, useState } from "react";
import clasess from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

export const Checkout = (props) => {
  const [formValid, setFormValid] = useState({
    name: true,
    address: true,
    city: true,
    phone: true,
  });
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const phoneInputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    for (const key in localStorage) {
      if (key === "token") {
      } else {
        localStorage.removeItem(key);
      }
    }

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    // just adding small validation
    const nameisValid = !isEmpty(enteredName);
    const addressisValid = !isEmpty(enteredAddress);
    const cityisValid = !isEmpty(enteredCity);
    const phoneisValid = !isEmpty(enteredPhone);

    setFormValid({
      name: nameisValid,
      address: addressisValid,
      city: cityisValid,
      phone: phoneisValid,
    });

    const formisValid =
      nameisValid && addressisValid && cityisValid && phoneisValid;

    if (!formisValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      addres: enteredAddress,
      city: enteredCity,
      phone: enteredPhone,
    });
  };

  const nameControlClasses = `${clasess.control} ${
    formValid.name ? "" : clasess.invalid
  }`;
  const addressControlClasses = `${clasess.control} ${
    formValid.address ? "" : clasess.invalid
  }`;
  const cityControlClasses = `${clasess.control} ${
    formValid.city ? "" : clasess.invalid
  }`;
  const phoneControlClasses = `${clasess.control} ${
    formValid.phone ? "" : clasess.invalid
  }`;
  return (
    <form className={clasess.form} onSubmit={onSubmit}>
      <div className={nameControlClasses}>
        <label htmlFor="name"> Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValid.name && <p>Please enter a Valid Name!</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address"> Street Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formValid.address && <p>Please enter a Valid Street Adddress!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city"> City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValid.city && <p>Please enter a Valid City Name!</p>}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="phone"> Phone Number</label>
        <input type="tel" id="phone" ref={phoneInputRef} />
        {!formValid.phone && <p>Please enter a Valid Phone Number!</p>}
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
