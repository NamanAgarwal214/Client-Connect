import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="title">REGISTER</h1>
      <form className="login-form">
        <div className="inp">
          <input placeholder="Name..." name="name" value={user.name} required />
        </div>
        <div className="inp">
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="E-mail..."
            required
          />
        </div>
        <div className="inp">
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
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
            type="text"
            value={user.phone}
            required
          />
        </div>
        <button className="btn btn-primary" onClick={submitHandler}>
          Register
        </button>
      </form>
      <p>
        Already have an account?&nbsp;<Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
