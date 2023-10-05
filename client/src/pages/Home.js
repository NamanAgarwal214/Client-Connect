import React, { useContext } from "react";
import HomeOut from "../components/HomeOut";
import HomeIn from "../components/HomeIn";
import { StateContext } from "../context/Context";
import Layout from "../components/Layout";

const Home = () => {
  const { loggedIn } = useContext(StateContext);
  return (
    <Layout title={"Client Connect"}>
      {loggedIn ? <HomeIn /> : <HomeOut />}
    </Layout>
  );
};

export default Home;
