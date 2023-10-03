import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-text">
        <h1>Connecting Client, Providing Services</h1>
        <p>
          <strong>Buy or Sell</strong> services/products, all at one place,{" "}
          <br /> <strong>#ClientConnect</strong>
        </p>
        <Link to="/register" id="get-started">
          <button className="btn start-btn">Get Started</button>
        </Link>
      </div>
      <div className="landing-image">
        <img className="one" src="/Vector.png" />
        <img src="./client_resize.jpg" className="landing-img" alt="" />
        <img className="two" src="/Vector-1.png" alt="" />
      </div>
    </section>
  );
};

export default Landing;
