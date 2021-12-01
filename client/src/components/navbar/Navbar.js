import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="navSwitcher">
        <li>
          <Link to="/" className="brand">Shoes</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faBars} className="bars" />
        </li>
      </ul>
      <ul className="navLinks">
        <li>
          <Link to="/futsal">Futsal</Link>
        </li>
        <li>
          <Link to="/eleven">Eleven</Link>
        </li>
        <li>
          <Link to="/sintetic">Sintetic</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
