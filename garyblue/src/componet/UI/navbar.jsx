import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../Images/GaryBlueLogo.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt=""
            width="50rem"
            height="50rem"
            className="d-inline-block align-text-centre me-3 rounded-circle"
          />
          Gary Blue's Dinner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pills">
            <li className="nav-item">
              <NavLink
                className="nav-link clickable"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link clickable" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link clickable" to="/order">
                Order Now
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link clickable" to="/cart">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link clickable" to="/test">
                Log In
              </NavLink>
            </li>
          </ul>
          <button>Cart</button>
          <button>Log In</button>
        </div>
      </div>
    </nav>
  );
}
