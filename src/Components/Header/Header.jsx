import React from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black py-3 rounded-t-3xl">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center ps-16">
          <img src={logo} alt="Logo" />
          <h1 className="text-white text-lg">Abstract | Help Center</h1>
        </Link>
        <div className="pe-48">
          <Link to="/request-submit">
            <button className="text-white rounded-md text-[16px] border border-gray-300 px-4 py-1">
              Submit a request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
