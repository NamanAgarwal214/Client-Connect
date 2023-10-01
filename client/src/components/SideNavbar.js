import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HailIcon from "@mui/icons-material/Hail";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";

const SideNavbar = () => {
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
        <div className="opt-1">
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
