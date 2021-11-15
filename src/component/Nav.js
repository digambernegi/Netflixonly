import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from '../images/logo.png'

const Nav = () => {
const [show, handleShow] = useState(false);

  const transtionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
      } 
    else {
      handleShow(false);
      }
    };
  useEffect(() => {
    window.addEventListener("scroll", transtionNavBar);
    return () => window.removeEventListener("scroll", transtionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"} `}>
    <div className="nav__content">
    <img className="nav_logo" src={logo} alt="logo"/>

    </div>
    </div>
  );};

export default Nav;
