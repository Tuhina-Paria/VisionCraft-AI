import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const images = [
  assets.image2,
  assets.image3,
  assets.image4,
  assets.image5,
  assets.image6,
];

  return (
    <section className="relative w-full pt-20 sm:pt-32 pb-20 px-4 text-center overflow-hidden">

      {/* Neon Background */}
      <div className="absolute inset-0 bg-[#0c0820]">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/30 to-black opacity-60"></div>

        {/* Blur glow (responsive) */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 
                        w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] 
                        bg-purple-600 blur-[140px] sm:blur-[180px] opacity-40">
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Badge */}
        <div
          className="
            inline-flex items-center gap-2 
            px-4 py-1
            bg-white/10 backdrop-blur-md
            border border-purple-500/40
            rounded-full
            shadow-[0_0_14px_rgba(165,70,255,0.6)]
            text-purple-300
            text-xs sm:text-sm
            font-medium
          "
        >
          <p>AI Image Maker</p>
          <img src={assets.star_icon} alt="star" className="w-3 sm:w-4" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-6xl font-extrabold text-white mt-8 leading-tight">
          Create Images Instantly
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 mt-4 text-sm sm:text-lg max-w-[90%] sm:max-w-[500px]">
          Type a prompt → Get an image in seconds.
        </p>

        {/* Buttons (stack on mobile) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            className="
              w-full sm:w-auto
              px-7 py-3 rounded-full 
              bg-gradient-to-r from-purple-500 to-pink-500
              text-black font-semibold
              shadow-[0_0_18px_rgba(255,0,200,0.7)]
              hover:scale-[1.05] transition
            "
          >
            Generate Now
          </button>

          <button
            className="
              w-full sm:w-auto
              px-5 py-2 rounded-full 
              border border-purple-400/40
              text-purple-300
              backdrop-blur-xl
              transition
              hover:text-pink-500
            "
          >
            How it Works
          </button>


        </div>
<div className="relative mt-14 flex flex-wrap justify-center gap-6 max-w-5xl">
  {images.map((img, index) => (
    <div
      key={index}
      className="
        w-[220px] h-[220px]
        rounded-xl
        bg-white/10
        backdrop-blur-md
        border border-purple-500/30
        shadow-[0_0_25px_rgba(165,70,255,0.4)]
        hover:scale-105 transition
      "
    >
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Header;
