import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { user, setShowUserLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowUserLogin(true);
    }
  };

  return (
    <footer className="mt-28 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Brand */}
        <div className="text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            VisionCraft.AI
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-7">
            Built for creators, developers, and designers.
          </p>

          {/* <button
            onClick={onClickHandler}
            className="
              mt-8
              px-7
              py-3
              rounded-full
              bg-white
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:bg-neutral-100
              active:scale-95
            "
          >
            Start Creating
          </button> */}
        </div>

        {/* Navigation */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <Link
            to="/"
            className="transition-all duration-300 hover:text-white hover:-translate-y-0.5"
          >
            Home
          </Link>

          {user && (
            <Link
              to="/gallery"
              className="transition-all duration-300 hover:text-white hover:-translate-y-0.5"
            >
              
            </Link>
          )}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} VisionCraft AI. All rights reserved.
          </p>
<p className="text-sm text-gray-500">Version 1.0</p>
          <p className="text-sm text-gray-500">
            Built with React • Express • MongoDB • Cloudinary
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;