import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Steps = () => {
  return (
    <section className="bg-black py-30 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
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
            From Idea to Image
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            Describe your vision, let AI generate the artwork,
            and download results ready for your next project.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          "
        >
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariant}
              className="
              p-8
              rounded-[28px]
              bg-white/[0.02]
              border
              border-white/[0.08]
              hover:border-white/[0.15]
              transition-all
              duration-300
              "
            >
              {/* Step Number */}
              <div
                className="
                text-white/30
                text-sm
                font-medium
                "
              >
                0{index + 1}
              </div>

              {/* Title */}
              <h3
                className="
                mt-4
                text-white
                text-2xl
                font-semibold
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                mt-4
                text-gray-400
                leading-relaxed
                "
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Steps;