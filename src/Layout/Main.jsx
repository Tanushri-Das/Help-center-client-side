import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";

const Main = () => {
  return (
    <div className="mx-1 mt-1">
      {/* <Header /> */}
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
