import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="relative my-32 px-4 overflow-hidden">

      {/* subtle background glow */}
      <div className="
        absolute inset-0 -z-10
        bg-gradient-to-b from-purple-700/10 via-transparent to-transparent
      " />

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="
          text-3xl sm:text-4xl lg:text-5xl
          font-bold text-white
          tracking-tight
        ">
          Loved by creators worldwide
        </h1>
        <p className="
          mt-4 text-gray-400
          text-sm sm:text-base
          max-w-xl mx-auto
        ">
          Real feedback from people building, creating, and imagining with VisionCraft AI.
        </p>
      </div>

      {/* Cards */}
      <div className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6 sm:gap-8
        max-w-7xl mx-auto
      ">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="
              relative group
              rounded-3xl p-6 sm:p-7
              bg-white/5 backdrop-blur-xl
              border border-purple-500/20
              shadow-[0_0_40px_rgba(139,92,246,0.18)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_0_60px_rgba(139,92,246,0.35)]
            "
          >
            {/* glow overlay */}
            <div className="
              absolute inset-0 rounded-3xl
              bg-gradient-to-br from-purple-500/20 to-pink-500/20
              opacity-0 group-hover:opacity-100
              transition
            " />

            {/* User */}
            <div className="relative flex items-center gap-4 mb-5">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="
                  w-12 h-12
                  rounded-full object-cover
                  border border-purple-500/40
                "
              />
              <div>
                <h2 className="text-white font-semibold">
                  {testimonial.name}
                </h2>
                <p className="text-sm text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="relative flex gap-1 mb-4">
              {Array(testimonial.stars).fill(0).map((_, i) => (
                <img
                  key={i}
                  src={assets.rating_star}
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
            </div>

            {/* Text */}
            <p className="
              relative text-gray-300
              text-sm sm:text-base
              leading-relaxed
            ">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
