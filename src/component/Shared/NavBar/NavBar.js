import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// import logo from "../../../images/bg.png";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../images/logo.png'
import gif from '../../../images/blood-donate.gif'

const NavBar = () => {
  const { user, logOut } = useAuth();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container ">
        <NavLink exact to="/" className="nav-logo text-left">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            className="menu-name"
          >
            <img className="me-3 rounded-circle" src={gif} alt="" width="60" height="auto" />
            Save life
          </NavLink>
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/donar"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Donar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/patient"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Patient
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact-us"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              className="menu-name"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            {
              user?.email ?
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={logOut}
                  className="menu-name"
                >
                  Logout
                </NavLink>
                :
                <NavLink
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  className="menu-name"
                >
                  Login
                </NavLink>
            }
          </li>
        </ul>
        <div className="nav-icon " onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;