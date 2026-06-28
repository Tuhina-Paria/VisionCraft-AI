import React from "react";
import { assets, featuresData } from "../assets/assets";
import { motion } from "framer-motion";
import { Zap, Shield, Cloud } from "lucide-react";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
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

const Features = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
           Why VisionCraft?
          </h2>

          <p
            className="
            mt-5
            text-gray-400
            max-w-2xl
            mx-auto
            text-lg
            leading-relaxed
            "
          >
           Every feature is designed to make AI image generation
fast, reliable, and easy to use.
          </p>
        </motion.div>

        {/*  Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >
         { featuresData.map((feature, index) => {
  const Icon = feature.icon;

  return (
    <motion.div
      key={index}
      variants={fadeUp}
     whileHover={{
  y: -8,
  scale: 1.02,
}}
      className="
      p-8
      rounded-[28px]
      bg-white/[0.02]
      border
      min-h-[280px]
      border-white/[0.08]
      hover:border-white/[0.15]
      transition-all
      duration-300
      "
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-semibold text-white">
        {feature.title}
      </h3>

      {/* Subtitle */}
      <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">
        {feature.subtitle}
      </p>

      {/* Description */}
      <p
        className="
        mt-5
        text-gray-400
        leading-relaxed
        text-base
        "
      >
        {feature.text}
      </p>
    </motion.div>
  );
})}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;