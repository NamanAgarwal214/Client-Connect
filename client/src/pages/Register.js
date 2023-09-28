import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
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

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="titleDiv">
          <Link to={"/"}>
            <BackIcon />
          </Link>
          <h1 className="title">REGISTER</h1>
        </div>

        <form className="login-form">
          <div className="inp">
            <input
              type="text"
              title="Name"
              placeholder="Name..."
              name="name"
              value={user.name}
              onChange={changeHandler}
              autoFocus={true}
              required
            />
          </div>
          <div className="inp">
            <input
              type="email"
              title="Email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              placeholder="E-mail..."
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
          <div className="inp">
            <input
              placeholder="Phone..."
              name="phone"
              title="Phone"
              type="text"
              maxLength={10}
              value={user.phone}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="btngrp">
            <button className="btn btn-primary" onClick={submitHandler}>
              Register
            </button>
          </div>
        </form>
        <p className="content">
          Already have an account?&nbsp;<Link to="/login">Login</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Register;
