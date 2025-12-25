import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="
      relative mt-32 px-6 py-8
      border-t border-purple-500/20
    ">

      {/* subtle top glow */}
      <div className="
        absolute inset-x-0 top-0 -z-10
        h-24
        bg-gradient-to-b from-purple-600/15 to-transparent
      " />

      <div className="
        max-w-7xl mx-auto
        flex flex-col sm:flex-row
        items-center justify-between
        gap-6
      ">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="
            p-[3px] rounded-xl
            bg-gradient-to-r from-purple-500 to-fuchsia-600
            shadow-[0_0_25px_rgba(168,85,247,0.8)]
            transition-transform duration-300
            group-hover:scale-105
          ">
            <img
              src="/favicon_icon2.png"
              alt="VisionCraft Logo"
              className="w-8 h-8 rounded-xl object-cover"
            />
          </div>
          <span className="text-white font-semibold tracking-tight">
            VisionCraft AI
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} VisionCraft AI. All rights reserved.
        </p>

         {/* Social icons */}
        <div className="flex gap-4">
          {[
            assets.twitter_icon1,
            assets.instagram_icon2,
            assets.facebook_icon2,
          ].map((icon, index) => (
            <div
              key={index}
              className="
                p-2 rounded-full
                bg-white/5 backdrop-blur-md
                border border-purple-500/20
                transition-all duration-300
                hover:scale-110 hover:-translate-y-1
                hover:shadow-[0_0_18px_rgba(168,85,247,0.9)]
              "
            >
              <img
                src={icon}
                alt="social"
                className="w-5 h-5"
              />
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
