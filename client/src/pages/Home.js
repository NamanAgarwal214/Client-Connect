import React, { useContext } from "react";
import HomeOut from "../components/HomeOut";
import HomeIn from "../components/HomeIn";
import { StateContext } from "../context/Context";

const Home = () => {
  const { loggedIn } = useContext(StateContext);
  return loggedIn ? <HomeIn /> : <HomeOut />;
};

export default Home;
