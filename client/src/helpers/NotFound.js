import React from "react";
import { Link } from "react-router-dom";
import BackIcon from "../components/BackIcon";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <p>
          The page you are looking for might have been removed or does not
          exist.
        </p>
        <Link to="/">
          <BackIcon />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
