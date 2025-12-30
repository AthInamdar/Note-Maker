import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Import the updated CSS
import Logo from "./Logo.png";

import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="" />
          <span>Note Maker</span>
        </Link>
      </div>
      <div className="navbar-buttons">
        <ThemeToggle />
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login-btn">Log In</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
