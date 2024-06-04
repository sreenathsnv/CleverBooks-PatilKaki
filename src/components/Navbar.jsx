import React, { useState } from "react";
import "../CSS/navbar.css";
import { motion, spring } from "framer-motion"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav" id="nav">
      <a href="#" className="nav__brand">
      CleverBooks
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/#home" className="nav__link">
            Product
          </a>
        </li>
        <li className="nav__item">
          <a href="/#about" className="nav__link">
            Pricing
          </a>
        </li>
        <li className="nav__item">
          <a href="/#skills" className="nav__link">
            Industry
          </a>
        </li>
        <li className="nav__item">
          <a href="/#projects" className="nav__link">
            Customer Stories
          </a>
        </li>
        <li className="nav__item">
          <a href="/#contact" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/#contact" className="nav__link">
            Blog
          </a>
        </li>
        <li>
            <div className="authbtn">
                <button className="loginbt" style={{"color": "linear-gradient(145deg, rgba(252, 144, 126, 1) 0%, rgba(159, 110, 237, 1) 100%)"}} type="button">Login</button>
                <button className="talktousbt" type="button">Talk to Us</button>
            </div>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;