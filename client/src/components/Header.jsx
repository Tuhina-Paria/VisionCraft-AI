import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Header = () => {
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
    <section className="relative bg-black min-h-screen overflow-hidden pt-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6"
      >
        {/* HERO CONTENT */}
        <div className="flex flex-col items-center text-center">
          
          {/* SMALL BADGE */}
          {/* <motion.div
            variants={item}
            className="
              px-4
              py-2
              rounded-full
             bg-[#121829]
              border
              border-[#6366F1]/30
              text-[#10B981]
              text-sm
              mb-8
            "
          >
            AI Image Generation Platform
          </motion.div> */}

          {/* HEADING */}
          <motion.h1
            variants={item}
            className="
              text-white
              font-black
              tracking-[-0.06em]
              leading-[0.9]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[90px]
              max-w-4xl
            "
          >
            CREATE IMAGES
            <br />
            THAT FEEL ALIVE
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={item}
            className="
              mt-8
              max-w-2xl
              text-gray-400
              text-lg
              md:text-xl
              leading-relaxed
            "
          >
            Generate cinematic artwork, concept designs,
            marketing visuals and creative assets with AI.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap  justify-center"
          >
            <button
              onClick={onClickHandler}
              className="
                px-8
                py-4
                rounded-full
                bg-white
                text-black
                font-semibold
               transition-all
duration-300
active:scale-95
              "
            >
              Start Creating
            </button>

            {/* <button
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/20
                text-white
                hover:bg-white/5
                transition
              "
            >
              Explore Gallery
            </button> */}
          </motion.div>
        </div>

        {/* SHOWCASE IMAGE */}
        <motion.div
          variants={item}
          className="mt-24 flex justify-center"
        >
          {/* <div
            className="
              w-full
              max-w-6xl
              rounded-[32px]
              overflow-hidden
              border
              border-white/10
            "
          >
            <img
              src={assets.image2}
              alt="showcase"
              className="
                w-full
                h-[300px]
                md:h-[500px]
                object-cover
              "
            />
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;