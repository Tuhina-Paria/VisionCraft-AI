import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const GenerateBtn = () => {
  const { user, setShowUserLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowUserLogin(true);
    }
  };

  return (
    <section className="relative my-32 px-4 text-center overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div
          className="
            w-[260px] h-[260px]
            sm:w-[480px] sm:h-[480px]
            bg-purple-600/25
            blur-[140px]
          "
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Heading */}
        <h1
          className="
            text-3xl sm:text-4xl lg:text-5xl
            font-semibold leading-tight tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-purple-300 to-pink-400
            mb-10
          "
        >
          See the magic.
          <br />
          Try it now.
        </h1>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={onClickHandler}
          className="
            relative group
            flex items-center gap-2

            /* MOBILE */
            px-7 py-3 text-sm

            /* DESKTOP */
            sm:px-10 sm:py-4 sm:text-base

            rounded-full
            font-semibold text-white
            bg-gradient-to-r from-purple-500 to-pink-500

            shadow-[0_0_20px_rgba(236,72,153,0.6)]
            sm:shadow-[0_0_35px_rgba(236,72,153,0.8)]

            overflow-hidden
            focus:outline-none
          "
        >
          {/* Subtle glow */}
          <span
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-r from-pink-500 to-purple-500
              opacity-20 sm:opacity-40
              blur-md
              transition
            "
          />

          {/* Shine sweep */}
          <span
            className="
              absolute top-0 left-[-120%]
              w-full h-full
              bg-gradient-to-r from-transparent via-white/25 to-transparent
              group-hover:left-[120%]
              transition-all duration-700
            "
          />

          {/* Button content */}
          <span className="relative flex items-center gap-1.5">
            Generate Image
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default GenerateBtn;
