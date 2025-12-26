import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // smooth ease-in-out cubic-bezier
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

  const images = [
    assets.image2,
    assets.image3,
    assets.image4,
    assets.image5,
    assets.image6,
  ];

  return (
    <section className="relative w-full pt-24 sm:pt-36 pb-28 px-4 text-center overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[#0b0720]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/25 via-black/40 to-black" />
        <div
          className="
          absolute -top-40 left-1/2 -translate-x-1/2
          w-[320px] h-[320px] sm:w-[650px] sm:h-[650px]
          bg-purple-600/40 blur-[160px] sm:blur-[220px]
        "
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* BADGE */}
        <motion.div
          variants={item}
          className="
            inline-flex items-center gap-2
            px-5 py-1.5 rounded-full
            bg-white/10 backdrop-blur-md
            border border-purple-500/40
            shadow-[0_0_20px_rgba(168,85,247,0.6)]
            text-purple-300 text-xs sm:text-sm font-medium
          "
        >
          <span>AI Image Generator</span>
          <img src={assets.star_icon} alt="star" className="w-4" />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          variants={item}
          className="
            mt-8
            text-4xl sm:text-6xl lg:text-7xl
            font-extrabold leading-tight tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-purple-300 to-pink-400
          "
        >
          Create images
          <br />
          instantly with AI
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          variants={item}
          className="
            mt-6 text-gray-300
            text-sm sm:text-lg
            max-w-md sm:max-w-xl
          "
        >
          Describe your idea. VisionCraft AI turns it into stunning visuals in seconds.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            onClick={onClickHandler}
            whileHover={{ scale: 1.07, boxShadow: "0 10px 25px rgba(236,72,153,0.6)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="
              w-full sm:w-auto
              px-8 py-3 rounded-full
              bg-gradient-to-r from-purple-500 to-pink-500
              text-black font-semibold
            "
          >
            Generate Now
          </motion.button>
        </motion.div>

        {/* IMAGE SHOWCASE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="
            mt-20
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
            gap-4 sm:gap-6
            max-w-6xl
          "
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.06, boxShadow: "0 15px 30px rgba(168,85,247,0.5)" }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="
                relative rounded-2xl overflow-hidden
                bg-white/10 backdrop-blur-md
                border border-purple-500/30
                shadow-[0_0_30px_rgba(168,85,247,0.35)]
                cursor-pointer
              "
            >
              <div
                className="
                absolute inset-0
                bg-gradient-to-br from-purple-500/25 to-pink-500/25
                opacity-0 hover:opacity-100 transition
              "
              />
              <img src={img} alt="" className="relative w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
