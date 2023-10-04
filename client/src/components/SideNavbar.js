import React, { useContext } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HailIcon from "@mui/icons-material/Hail";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { toast } from "react-toastify";
import { DispatchContext, StateContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const { token } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.status === "success") {
        toast.success("Logged Out Successfully");
        dispatch({ type: "logout" });
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="sideNav">
      <div className="side-header">
        <div>
          <img src="./favicon.png" className="side-logo" alt="Client Connect" />
        </div>
        <div>
          <h1 className="side-title">Client Connect</h1>
        </div>
      </div>
      <div className="sideLinks">
        <div className={`opt-1`}>
          <div>
            <DashboardIcon fontSize="large" className="side-logo" />
          </div>
          <div>
            <p>Dashboard</p>
          </div>
        </div>
        <div className={`opt-1`}>
          <div>
            <StorefrontIcon fontSize="large" className="side-logo" />
          </div>
          <div>
            <p>Provider</p>
          </div>
        </div>
        <div className="opt-1">
          <div>
            <HailIcon fontSize="large" className="side-logo" />
          </div>
          <div>
            <p>Customer</p>
          </div>
        </div>
        <div className="opt-1">
          <div>
            <HelpIcon fontSize="large" className="side-logo" />
          </div>
          <div>
            <p>Help</p>
          </div>
        </div>
        <div className="opt-1" onClick={logoutHandler}>
          <div>
            <LogoutIcon fontSize="large" className="side-logo" />
          </div>
          <div>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
