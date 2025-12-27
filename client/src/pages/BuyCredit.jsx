import React from "react";
import { plans } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const BuyCredit = () => {
  const {user}=useContext(AppContext);
  return (
    <div className="min-h-[80vh] px-4 pt-16 mb-14 text-white">

      {/* Header */}
      <motion.div
      
initial={{ opacity: 0.2, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}


      className="text-center mb-12 mt-20">
        <button className="mb-6 px-8 py-2 rounded-full border border-white/20 text-sm text-white/70 hover:text-white transition">
          Our Plans
        </button>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Choose the plan that fits you
        </h1>

        <p className="mt-3 text-sm text-white/60 max-w-md mx-auto">
          Flexible pricing for creators. Upgrade anytime.
        </p>
      </motion.div>

      {/* Plans */}
      <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((item, index) => (
          <div
            key={index}
            className="
              relative
              rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-lg
              p-6 sm:p-7
              transition
              hover:scale-[1.02]
              hover:border-purple-500/40
            "
          >
            {/* Plan name */}
            <p className="text-lg font-medium mb-1">
              {item.id}
            </p>

            {/* Description */}
            <p className="text-sm text-white/60 mb-6">
              {item.desc}
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-semibold">
                ${item.price}
              </span>
              <span className="text-sm text-white/60">
                {" "} / {item.credits} credits
              </span>
            </div>

            {/* CTA */}
            <button
              className="
                w-full
                py-3
                rounded-full
                bg-gradient-to-r from-purple-600 to-fuchsia-600
                text-white text-sm font-medium
                hover:opacity-90
                transition
              "
            >{user ?  'Buy Credits' :' Get Started'}
             
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BuyCredit;
