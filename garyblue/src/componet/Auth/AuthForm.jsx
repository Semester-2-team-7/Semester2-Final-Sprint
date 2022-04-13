import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.target;
    const password = passwordInputRef.current.target;
    const name = nameInputRef.current.target;
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="name">Enter Your Name</label>
            <input
              maxlength="25"
              type="text"
              id="name"
              pattern="[a-zA-Z]+"
              required
              ref={nameInputRef}
            />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email"> Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password"> Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            minlength="5"
            maxlength="10"
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
