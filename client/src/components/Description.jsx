import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 my-32">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">
          VisionCraft AI
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Where imagination becomes visuals — instantly.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE – NEXT LEVEL */}
        <div className="relative group perspective">
          
          {/* Animated gradient glow */}
          <div className="
            absolute -inset-2 rounded-3xl
            bg-gradient-to-r from-purple-500 via-fuchsia-600 to-pink-500
            opacity-30 blur-2xl
            group-hover:opacity-70
            transition duration-700
            animate-pulse
          " />

          {/* Floating card */}
          <div className="
            relative rounded-3xl overflow-hidden
            transform transition-all duration-700
            group-hover:scale-[1.05]
            group-hover:-rotate-1
            shadow-[0_30px_80px_rgba(168,85,247,0.35)]
          ">
            <img
              src={assets.image7}
              alt="VisionCraft AI Preview"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
            Create stunning AI images  
            <span className="block text-purple-400">
              from simple words
            </span>
          </h3>

          <p className="text-gray-400 mb-4 leading-relaxed">
            VisionCraft AI transforms your ideas into
            high-quality, production-ready visuals
            in seconds.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Designed for creators who want speed,
            control, and limitless creativity —
            without complexity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Description;
