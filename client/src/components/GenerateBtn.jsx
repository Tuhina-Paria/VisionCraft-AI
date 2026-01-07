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
    <section className="relative my-28 px-4 text-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] bg-purple-600/25 blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto flex flex-col items-center"
      >
        {/* Heading */}
        <h1
          className="
            text-2xl sm:text-4xl lg:text-5xl
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
          onClick={onClickHandler}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="
            relative group

            /* MOBILE (compact) */
            px-5 py-2.5
            text-sm
            rounded-lg

            /* TABLET + DESKTOP */
            sm:px-10 sm:py-3.5
            sm:text-base
            sm:rounded-xl

            border border-purple-400/40

            
           bg-gradient-to-r from-purple-600 to-fuchsia-600

            backdrop-blur-md
            font-medium text-white tracking-wide

            hover:shadow-[0_0_36px_-12px_rgba(168,85,247,0.9)]
            transition-all duration-300
          "
        >
          {/* Soft neon overlay */}
          <span
            className="
              pointer-events-none
              absolute inset-0 rounded-[inherit]
            
             bg-gradient-to-r from-purple-600 to-fuchsia-600
              opacity-0 group-hover:opacity-100
              transition
            "
          />

          <span className="relative flex items-center gap-1.5">
            Generate Image
            <span className="opacity-60 group-hover:opacity-100 transition">
              →
            </span>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default GenerateBtn;
