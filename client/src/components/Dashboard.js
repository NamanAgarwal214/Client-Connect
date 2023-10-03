import React, { Fragment } from "react";
import SideNavbar from "./SideNavbar";
import CreateForm from "./create post/CreateForm";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="create">
        {/* <div className="left-create"> */}
        <SideNavbar />
        {/* </div> */}

        <div className="right-create">
          <Navbar />
          <CreateForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
