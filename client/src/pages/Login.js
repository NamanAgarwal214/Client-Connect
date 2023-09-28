import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const toggle = () => {
    // if (state) {
    //   document.getElementById("password").setAttribute("type", "password");
    //   state = false;
    //   document.getElementById("open").style.display = "inline-block";
    //   document.getElementById("close").style.display = "none";
    // } else {
    //   document.getElementById("password").setAttribute("type", "text");
    //   state = true;
    //   document.getElementById("open").style.display = "none";
    //   document.getElementById("close").style.display = "inline-block";
    // }
    console.log("hello");
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
              value={user.password}
              onChange={changeHandler}
              placeholder="Password"
              required
            />
            <i className="fas fa-eye" id="open" onClick={toggle}></i>
            <i className="fas fa-eye-slash" id="close" onClick={toggle}></i>
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
