import React from 'react'
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${classes.navBarStyle}`}>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                </li>
                <li className="nav-item">
                            <NavLink to="/Portfolio" className="nav-link" aria-current="page" href="#">Portfolio</NavLink>
                </li>        
                {/* <li class="nav-item dropdown">
                    <a to="/Portfolio" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Portfolio</a>
                <ul class={`dropdown-menu ${classes.menuDropDown}`}>
                    <li><a class="dropdown-item nav-item" href="#SchoolProject">School</a></li>
                    <li><a class="dropdown-item nav-item" href="#OtherProject">Other</a></li>
                </ul>
                </li> */}
                <li className="nav-item">
                    <NavLink to="/Contact" className="nav-link" href="#">Contact</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    
  )
};

export default Navbar;
