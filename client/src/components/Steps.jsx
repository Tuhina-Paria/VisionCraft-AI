import React from "react";
import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <section className="relative my-20 px-4">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-purple-600/25 blur-[160px]" />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          How it Works
        </h1>
        <p className="text-purple-300 text-sm sm:text-base mt-2 mb-10">
          Transform words into stunning images
        </p>

        {/* Steps */}
        <div className="w-full max-w-3xl space-y-4">
          {stepsData.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col sm:flex-row
                items-center sm:items-start
                gap-4
                p-4 sm:p-6
                rounded-xl
                bg-white/10 backdrop-blur-md
                border border-purple-500/30
                shadow-[0_0_18px_rgba(165,70,255,0.2)]
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="
                flex items-center justify-center
                w-10 h-10
                rounded-lg
                bg-purple-500/20
                shrink-0
              ">
                <img src={item.icon} alt="" className="w-5 h-5" />
              </div>

              {/* Text */}
              <div className="text-center sm:text-left">
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-purple-200 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
