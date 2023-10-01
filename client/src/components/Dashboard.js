import React, { Fragment } from "react";
import SideNavbar from "./SideNavbar";
import CreateForm from "./create post/CreateForm";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="create">
        <SideNavbar />
        <CreateForm />
      </div>
    </Fragment>
  );
};

export default Dashboard;
