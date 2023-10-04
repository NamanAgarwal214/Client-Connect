import React, { useContext } from "react";
import { StateContext } from "../context/Context";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const { loggedIn } = useContext(StateContext);
  return loggedIn ? children : <Navigate to={"/login"} replace={true} />;
};

export default Protect;
