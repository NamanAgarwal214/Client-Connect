import React, { Fragment } from "react";
import SideNavbar from "./SideNavbar";
import CreateForm from "./create post/CreateForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="create">
        <div className="left-create">
          <SideNavbar />

          <div className="right-create">
            <Navbar />
            <CreateForm />
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Dashboard;
