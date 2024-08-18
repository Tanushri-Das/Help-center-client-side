import React from "react";
import logo from "../../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black px-2 sm:px-4 py-3 md:px-0 rounded-t-3xl">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center ps-0 md:ps-16">
          <img src={logo} alt="Logo" />
          <h1 className="text-white text-sm md:text-lg">Abstract | Help Center</h1>
        </Link>
        <div className="pe-0 md:pe-48">
          <Link to="/request-submit">
            <button className="text-white rounded-md text-sm md:text-[16px] border border-gray-300 px-4 py-2">
              Submit a request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
