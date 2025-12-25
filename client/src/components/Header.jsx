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
    <section className="relative w-full pt-24 sm:pt-36 pb-28 px-4 text-center overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0720]">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/25 via-black/40 to-black" />

        {/* central glow */}
        <div className="
          absolute -top-40 left-1/2 -translate-x-1/2
          w-[320px] h-[320px] sm:w-[650px] sm:h-[650px]
          bg-purple-600/40 blur-[160px] sm:blur-[220px]
        " />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* BADGE */}
        <div className="
          inline-flex items-center gap-2
          px-5 py-1.5
          rounded-full
          bg-white/10 backdrop-blur-md
          border border-purple-500/40
          shadow-[0_0_20px_rgba(168,85,247,0.6)]
          text-purple-300 text-xs sm:text-sm font-medium
        ">
          <span>AI Image Generator</span>
          <img src={assets.star_icon} alt="star" className="w-4" />
        </div>

        {/* HEADING */}
        <h1 className="
          mt-8
          text-4xl sm:text-6xl lg:text-7xl
          font-extrabold
          leading-tight tracking-tight
          text-transparent bg-clip-text
          bg-gradient-to-r from-white via-purple-300 to-pink-400
        ">
          Create images  
          <br />
          instantly with AI
        </h1>

        {/* SUBTEXT */}
        <p className="
          mt-6
          text-gray-300
          text-sm sm:text-lg
          max-w-md sm:max-w-xl
        ">
          Describe your idea. VisionCraft AI turns it into
          stunning visuals in seconds.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

          <button className="
            w-full sm:w-auto
            px-8 py-3 rounded-full
            bg-gradient-to-r from-purple-500 to-pink-500
            text-black font-semibold
            shadow-[0_0_30px_rgba(236,72,153,0.8)]
            transition-all duration-300
            hover:scale-[1.06]
          ">
            Generate Now
          </button>

          <button className="
            w-full sm:w-auto
            px-7 py-3 rounded-full
            border border-purple-400/40
            text-purple-300
            backdrop-blur-xl
            transition-all duration-300
            hover:text-pink-400 hover:border-pink-400/50
          ">
            How it works
          </button>

        </div>

        {/* IMAGE SHOWCASE */}
        <div className="
          mt-20
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
          gap-4 sm:gap-6
          max-w-6xl
        ">
          {images.map((img, index) => (
            <div
              key={index}
              className="
                relative group
                rounded-2xl overflow-hidden
                bg-white/10 backdrop-blur-md
                border border-purple-500/30
                shadow-[0_0_30px_rgba(168,85,247,0.35)]
                transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.05]
              "
            >
              {/* hover glow */}
              <div className="
                absolute inset-0
                bg-gradient-to-br from-purple-500/25 to-pink-500/25
                opacity-0 group-hover:opacity-100
                transition
              " />

              <img
                src={img}
                alt=""
                className="relative w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Header;
