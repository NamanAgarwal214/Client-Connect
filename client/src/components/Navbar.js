import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { StateContext } from "../context/Context";

const Navbar = () => {
  const { loggedIn, user } = useContext(StateContext);

  return (
    <header>
      <div className="nav">
        <div className="brand-title">
          {!loggedIn ? (
            <img src="./favicon.png" className="logo" alt="Client Connect" />
          ) : (
            <MenuIcon fontSize="large" className="" />
          )}
          <h1>{loggedIn ? "Welcome !!!" : "Client Connect"}</h1>
        </div>
        <div className="btns">
          {loggedIn && (
            <>
              <h1>{user.name}</h1>
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
