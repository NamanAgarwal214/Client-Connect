import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Footer from "./Footer";

const HomeOut = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Footer />
    </Fragment>
  );
};

export default HomeOut;
