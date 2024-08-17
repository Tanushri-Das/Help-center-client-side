import React from "react";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <div className="bg-black py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center ps-16">
          <img src={logo} alt="" />
          <h1 className="text-white text-lg">Abstract | Help Center</h1>
        </div>
        <div className="pe-48">
          <button className="text-white rounded-md text-[16px] border border-gray-300 px-4 py-1">
            Submit a request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
