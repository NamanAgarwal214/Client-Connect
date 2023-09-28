import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="nav">
        <div className="brand-title">
          <img src="./logo.jpg" className="logo" alt="Client Connect" />
          <h1>Client Connect</h1>
        </div>
        <div className="btns">
          <Link to={"/login"}>
            <button className="btn nav-btn">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn nav-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
