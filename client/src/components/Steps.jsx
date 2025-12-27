import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <section className="relative my-24 px-4">
      {/* Neon background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-600/30 blur-[160px]" />
      </div>

      {/* Heading */}
      <motion.div 
      initial={{opacity:0.2,y:100}}
      transition={{duration: 1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      
      className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          How it Works
        </h1>
        <p className="text-purple-300 text-sm sm:text-base mt-2 mb-12">
          Transform words into stunning images
        </p>

        {/* Steps */}
        <div className="w-full max-w-3xl space-y-5">
          {stepsData.map((item, index) => (
            <div
              key={index}
              className="
                group
                flex flex-col sm:flex-row
                items-center sm:items-start
                gap-4
                p-5 sm:p-6
                rounded-2xl
                bg-white/10 backdrop-blur-md
                border border-purple-500/30
                shadow-[0_0_18px_rgba(165,70,255,0.25)]
                transition-all duration-300
                hover:bg-white/20
                hover:border-purple-400/60
                hover:shadow-[0_0_30px_rgba(165,70,255,0.55)]
                hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div
                className="
                  flex items-center justify-center
                  w-11 h-11
                  rounded-lg
                  bg-purple-500/20
                  shrink-0
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5"
                />
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
      </motion.div>
    </section>
  );
};

export default Steps;
