import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="brand-title footer-title">
          <Link>
            <h1>Client Connect</h1>
          </Link>
        </div>
        <div className="link-div">
          <div className="link-1">
            <span>Resources</span>
            <div className="links">
              <Link href="#">Repository</Link>
              <Link href="#developers">Developers</Link>
            </div>
          </div>
          <div className="link-2">
            <span>Team</span>
            <div className="links">
              <Link href="#">Feedback</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
