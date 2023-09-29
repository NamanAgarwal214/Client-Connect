import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HailIcon from "@mui/icons-material/Hail";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";

const SideNavbar = () => {
  return (
    <div className="sideNav">
      <div className="sideLinks">
        <div className="opt-1">
          <div>
            <img
              src="./favicon.png"
              className="side-logo"
              alt="Client Connect"
            />
          </div>
          <div>
            <h1 className="side-title">Client Connect</h1>
          </div>
        </div>
        <div className="opt-1">
          <div>
            <DashboardIcon color="white" className="side-logo" />
          </div>
          <div>
            <p>Dashboard</p>
          </div>
        </div>
        <div className="opt-1">
          <div>
            <StorefrontIcon className="side-logo" />
          </div>
          <div>
            <p>Provider</p>
          </div>
        </div>
        <div className="opt-1">
          <div>
            <HailIcon className="side-logo" />
          </div>
          <div>
            <p>Customer</p>
          </div>
        </div>
        <div className="opt-1">
          <div>
            <HelpIcon className="side-logo" />
          </div>
          <div>
            <p>Help</p>
          </div>
        </div>
        <div className="opt-1">
          <div>
            <LogoutIcon className="side-logo" />
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
