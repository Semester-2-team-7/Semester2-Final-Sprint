import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../Images/GaryBlueLogo.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt=""
            width="70rem"
            height="70rem"
            className="d-inline-block align-text-centre me-3 rounded-circle"
          />
          <h1 className="d-inline">Gary Blue's Dinner</h1>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav me-4 ">
            <li className="nav-item px-2">
              <NavLink
                className="nav-link clickable h3"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link clickable h3" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link clickable h3" to="/order">
                Order Now
              </NavLink>
            </li>

            <li className="nav-item px-2">
              <NavLink className="nav-link clickable h3" to="/test">
                test
              </NavLink>
            </li>
          </ul>
          <NavLink className="nav-link clickable " to="/cart">
            <button type="button" className="btn btn-outline-light me-2 btn-lg">
              Cart <span class="badge bg-primary  ">4</span>
            </button>
          </NavLink>
          <NavLink className="nav-link clickable " to="/auth">
            <button
              type="button"
              className="btn btn-outline-light btn-lg me-2 "
            >
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
