import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Showcase = () => {
  const images = [
    assets.image2,
    assets.image3,
    assets.image4,
    assets.image5,
    assets.image6,
    assets.image7,
  ];

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <h2
            className="
            text-white
            font-bold
            text-4xl
            md:text-6xl
            tracking-[-0.04em]
            leading-tight
            "
          >
            Explore What's Possible
          </h2>

          <p
            className="
            mt-5
            text-gray-400
            max-w-2xl
            mx-auto
            text-base
            md:text-lg
            leading-relaxed
            "
          >
            Discover artwork, concept designs, product visuals,
            and cinematic creations generated with VisionCraft AI.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
          mt-16
          flex
          gap-5
          overflow-x-auto
          px-6
          pb-4
          scrollbar-hide
          "
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              flex-shrink-0
              w-[220px]
              sm:w-[260px]
              md:w-[300px]
              lg:w-[340px]
              rounded-[28px]
              overflow-hidden
              "
            >
              <img
                src={image}
                alt="AI Artwork"
                className="
                w-[180px]
                h-[280px]
                sm:w-[220px]
md:w-[280px]
lg:w-[340px]
                object-cover
                grayscale
                hover:grayscale-0
                transition-all
                duration-500
                "
              />
            </motion.div>
          ))}
        </motion.div>
    <div className="mt-8 flex justify-center">
  <p className="text-xs tracking-[0.25em] uppercase text-gray-500 animate-pulse">
    ← Scroll to Explore →
  </p>
</div>
      </div>
    </section>
  );
};

export default Showcase;