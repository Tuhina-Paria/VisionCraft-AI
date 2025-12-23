import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="my-28 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Loved by Creators Worldwide
        </h1>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          See how VisionCraft AI is helping people turn imagination into reality
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white/5 backdrop-blur-xl border border-purple-500/20
                       rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.15)]
                       hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]
                       hover:-translate-y-1 transition-all duration-300"
          >
            {/* User */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border border-purple-500/30"
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
            <div className="flex gap-1 mb-4">
              {Array(testimonial.stars)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.rating_star}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
            </div>

            {/* Text */}
            <p className="text-gray-300 text-sm leading-relaxed">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
