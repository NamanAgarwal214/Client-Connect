import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "../components/Layout";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const passRef = useRef();
  const navigate = useNavigate();

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
    for (let key in user) {
      if (user.hasOwnProperty(key)) {
        let value = user[key];
        if (value === "") {
          toast.error("Please fill all fields");
          return;
        }
      }
    }
    try {
      const res = await axios.post("/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.status === "success") {
        // success
        toast.success("Logged in successfully");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error.message);
    }
  };

  const forgotHandler = async () => {};

  return (
    <Layout title={"Login"}>
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
    </Layout>
  );
};

export default Login;
