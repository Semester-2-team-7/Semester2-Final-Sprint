import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order Now</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <button>Cart</button>
            </NavLink>
          </li>
          <li>
            <button>Sign In</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
