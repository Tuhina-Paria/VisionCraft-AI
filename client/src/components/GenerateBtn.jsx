import React from "react";

const GenerateBtn = () => {
  return (
    <section className="relative my-36 px-4 text-center overflow-hidden">

      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[300px] h-[300px] sm:w-[520px] sm:h-[520px]
          bg-purple-600/30 blur-[160px]
        " />
      </div>

      <div className="relative max-w-2xl mx-auto flex flex-col items-center">

        {/* headline */}
        <h1 className="
          text-3xl sm:text-4xl lg:text-5xl
          font-semibold leading-tight tracking-tight
          text-transparent bg-clip-text
          bg-gradient-to-r from-white via-purple-300 to-pink-400
        ">
          See the magic.
          <br />
          Try it now.
        </h1>

        {/* subtext */}
        <p className="
          mt-6 mb-12
          text-sm sm:text-base
          text-gray-300 max-w-md
        ">
          Turn your ideas into stunning, high-quality AI images
          in just seconds.
        </p>

        {/* CTA button */}
        <button
          className="
            relative group
            flex items-center gap-2
            px-11 py-4
            rounded-full
            bg-gradient-to-r from-purple-500 to-pink-500
            text-white font-semibold
            shadow-[0_0_35px_rgba(236,72,153,0.8)]
            transition-all duration-300
            hover:scale-[1.08]
            hover:shadow-[0_0_55px_rgba(236,72,153,1)]
            focus:outline-none
          "
        >
          {/* glow ring */}
          <span className="
            absolute -inset-1 rounded-full
            bg-gradient-to-r from-purple-400 to-pink-400
            blur-lg opacity-50
            group-hover:opacity-100 transition
          " />

          <span className="relative">Generate Image</span>

          {/* arrow */}
          <span className="
            relative text-lg
            transition-transform duration-300
            group-hover:translate-x-1
          ">
            →
          </span>
        </button>

        {/* subtle helper text */}
        <p className="mt-4 text-xs text-gray-400">
          No credit card required
        </p>

      </div>
    </section>
  );
};

export default GenerateBtn;
