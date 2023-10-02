import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <header>
      <div className="nav">
        <div className="brand-title">
          {!loggedIn && (
            <img src="./favicon.png" className="logo" alt="Client Connect" />
          )}
          <h1>{loggedIn ? "Welcome !!!" : "Client Connect"}</h1>
        </div>
        <div className="btns">
          {loggedIn && (
            <>
              <h1>{"Naman"}</h1>
              <img
                src="./favicon.png"
                className="logo dp"
                alt="Client Connect"
              />
            </>
          )}
          {!loggedIn && (
            <>
              <Link to={"/login"}>
                <button className="btn nav-btn">Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn nav-btn">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
