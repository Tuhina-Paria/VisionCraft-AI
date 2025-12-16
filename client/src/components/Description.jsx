import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 my-28">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">
          Create AI Images
        </h1>
        <p className="mt-2 text-gray-400 text-sm sm:text-base">
          Turn your imagination into visuals
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <img
          src={assets.image7}
          alt="AI image generation"
          className="w-full rounded-xl"
        />

        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
            AI-Powered Text to Image Generator
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Create high-quality images from simple text prompts using our
            advanced AI technology. No design skills required.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Whether you're an artist, creator, or developer, VisionCraft
            helps you generate visuals faster and easier.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Description;
