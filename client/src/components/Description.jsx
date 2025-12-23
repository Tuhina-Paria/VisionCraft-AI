import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 my-28">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">
          Introducing VisionCraft AI
        </h1>
        <p className="mt-2 text-gray-400 text-sm sm:text-base">
          Transform ideas into stunning AI-generated visuals
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <img
          src={assets.image7}
          alt="VisionCraft AI preview"
          className="w-full rounded-xl"
        />

        {/* Text */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4">
            Create images using simple text prompts
          </h3>

          <p className="text-gray-400 mb-4 leading-relaxed">
            VisionCraft AI is an intelligent text-to-image platform that
            converts your words into high-quality visuals in seconds.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Designed for creators, developers, and artists who want
            speed, creativity, and precision — without complexity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Description;
