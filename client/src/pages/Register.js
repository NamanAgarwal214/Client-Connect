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
      <h1>Register</h1>
      <form id="regForm">
        <div className="tab">
          <div className="flex">
            <p>
              <input
                placeholder="Name..."
                name="name"
                value={user.name}
                required
              />
            </p>
          </div>
          <div className="flex">
            <p>
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="E-mail..."
                required
              />
            </p>
          </div>
          <div className="flex">
            <p>
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
            </p>
          </div>
          <div className="flex">
            <p>
              <input
                placeholder="Phone..."
                name="phone"
                type="text"
                value={user.phone}
                required
              />
            </p>
          </div>
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
