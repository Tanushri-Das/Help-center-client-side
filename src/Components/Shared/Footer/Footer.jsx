import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";

const Footer = () => {
  return (
    <div className="bg-black py-10 px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div>
          <h2 className="text-lg text-white font-semibold mb-3">Abstract</h2>
          <Link to="/branches" className="text-[14px] text-white">
            Branches
          </Link>
        </div>
        <div>
          <h2 className="text-lg text-white font-semibold mb-3">Resources</h2>
          <div className="flex flex-col">
            <Link to="/blog" className="text-[14px] text-white mb-1">
              Blog
            </Link>
            <Link to="/" className="text-[14px] text-white mb-1">
              Help Center
            </Link>
            <Link to="/" className="text-[14px] text-white mb-1">
              Release Notes
            </Link>
            <Link to="/" className="text-[14px] text-white mb-1">
              Status
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-white font-semibold mb-3">Community</h2>
          <div className="flex flex-col">
            <Link to="/" className="text-[14px] text-white mb-1">
              Twitter
            </Link>
            <Link to="/" className="text-[14px] text-white mb-1">
              LinkedIn
            </Link>
            <Link to="/" className="text-[14px] text-white mb-1">
              Facebook
            </Link>
            <Link to="/" className="text-[14px] text-white mb-1">
              Dribble
            </Link>
            <Link to="/" className="text-[14px] text-white mb-1">
              Podcast
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-white font-semibold mb-3">Company</h2>
          <div className="flex flex-col mb-6">
            <Link to="/about" className="text-[14px] text-white mb-1">
              About Us
            </Link>
            <Link to="/career" className="text-[14px] text-white mb-1">
              Career
            </Link>
            <Link to="/legal" className="text-[14px] text-white mb-1">
              Legal
            </Link>
          </div>
          <h2 className="text-[16px] text-white font-semibold mb-1">
            Contact Us
          </h2>
          <h2 className="text-[12px] text-white">info@abstract.com</h2>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <img src={logo} alt="Logo" />
          <p className="text-sm text-white mb-1">© Copyright 2022 </p>
          <h2 className="text-sm text-white mb-1">
            Abstract Studio Design, Inc.
          </h2>
          <h2 className="text-sm text-white">All rights reserved</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
