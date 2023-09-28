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

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    captcha: "",
  });
  const [open, setOpen] = useState(false);
  const passRef = useRef();

  useEffect(() => {
    loadCaptchaEnginge(5, "cyan");
  }, []);

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
          <div className="inp captcha">
            <div className="text">
              <LoadCanvasTemplate reloadText="Regenerate" />
            </div>
            <input
              type="text"
              title="captcha"
              name="captcha"
              value={user.captcha}
              onChange={changeHandler}
              placeholder="Captcha..."
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
