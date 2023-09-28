import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const passRef = useRef();

  const toggle = () => {
    setOpen(!open);
    if (passRef.current.type === "text") passRef.current.type = "password";
    else passRef.current.type = "text";
  };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    Object.values(user).forEach((val) => {
      if (val === "") return;
      // error
    });
    try {
    } catch (error) {
      console.log(error.message);
    }
  };

  const forgotHandler = async () => {};

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="titleDiv">
          <Link to={"/"}>
            <BackIcon />
          </Link>
          <h1 className="title">LOGIN</h1>
        </div>

        <form className="login-form">
          <div className="inp">
            <input
              type="email"
              title="Email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              placeholder="E-mail..."
              autoFocus={true}
              required
            />
          </div>
          <div className="inp">
            <input
              type="password"
              id="password"
              title="Password"
              name="password"
              ref={passRef}
              value={user.password}
              onChange={changeHandler}
              placeholder="Password"
              required
            />
            <div className="eye-icon">
              {open ? (
                <VisibilityIcon onClick={toggle} />
              ) : (
                <VisibilityOffIcon onClick={toggle} />
              )}
            </div>
          </div>

          <div className="btngrp">
            <button className="btn btn-primary" onClick={submitHandler}>
              Login
            </button>
            <button className="btn btn-primary" onClick={forgotHandler}>
              Forgot Password
            </button>
          </div>
        </form>
        <p className="content">
          New to Client Connect?&nbsp;<Link to="/register">Register</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
