import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
