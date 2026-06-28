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
    <section className="bg-black py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
        max-w-4xl
        mx-auto
        text-center
        "
      >
        <h2
          className="
          text-white
          text-4xl
          md:text-6xl
          font-bold
          tracking-[-0.04em]
          "
        >
         Ready to turn your ideas into images?
        </h2>

        <p
          className="
          mt-6
          text-gray-400
          text-lg
          max-w-2xl
          mx-auto
          "
        >
         Every great design starts with a single prompt.
        </p>

        <motion.button
          onClick={onClickHandler}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="
          mt-10
          px-8
          py-4
          rounded-full
          bg-white
          text-black
          font-semibold
          transition
          "
        >
          Start Creating
        </motion.button>
      </motion.div>
    </section>
  );
};

export default GenerateBtn;