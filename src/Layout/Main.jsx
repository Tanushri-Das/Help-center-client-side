import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <div className="mx-2 mt-2">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
