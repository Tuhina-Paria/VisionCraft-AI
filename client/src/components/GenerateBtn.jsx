import React from 'react'

const GenerateBtn = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
      
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight">
        See the magic. Try it now.
      </h1>

      <p className="mt-4 mb-8 text-sm md:text-base text-white/70">
        Turn your ideas into high-quality AI images in seconds.
      </p>

      <button
        className="
          px-8 py-3 rounded-full
          bg-gradient-to-r from-purple-500 to-pink-500
          text-white font-medium
          shadow-md
          hover:opacity-90
          focus:outline-none focus:ring-2 focus:ring-purple-500/50
        "
      >
        Generate Image
      </button>

    </div>
  )
}

export default GenerateBtn
