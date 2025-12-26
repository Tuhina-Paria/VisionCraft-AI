import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [loading, setLoading] = useState(false);
  const[input,setInput]=useState("");

  const onSubmitHandler=async(e)=>{

  }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[90vh] flex flex-col items-center justify-center px-4">

      {/* IMAGE PREVIEW */}
      <div className="w-full flex flex-col items-center">
        <div className="relative">
          <img
            src={image}
            alt="Generated result"
            className="
              w-[320px] sm:w-[420px]
              rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.55)]
              border border-white/10
            "
          />

          {/* Loading indicator */}
          {loading && (
            <span className="
              absolute bottom-0 left-0 h-[2px] w-full
              bg-gradient-to-r from-purple-500 to-fuchsia-500
              animate-pulse
            " />
          )}
        </div>

        {loading && (
          <p className="mt-4 text-xs text-white/60 tracking-wide">
            Generating image…
          </p>
        )}
      </div>

      {/* INPUT (ONLY BEFORE IMAGE IS READY) */}
      {!isImageLoaded && (
        <div className="mt-10 w-full max-w-md">
          <div className="
            flex flex-col gap-3
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-2xl
            p-2
          ">
            <input
            onChange={e=>setInput(e.target.value)}
            value={input}
              type="text"
              placeholder="Describe what you want to generate"
              className="
                w-full
                bg-transparent
                text-white text-sm
                px-4 py-3
                outline-none
                placeholder:text-white/40
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r from-purple-600 to-fuchsia-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(168,85,247,0.45)]
                hover:opacity-90
                transition
              "
            >
              Generate Image
            </button>
          </div>
        </div>
      )}

      {/* ACTIONS (ONLY AFTER IMAGE IS READY) */}
      {isImageLoaded && (
        <div className="
          mt-10
          flex flex-col items-center gap-4
        ">
          {/* Generate another */}
          <button
            type="button"
            onClick={()=>{setIsImageLoaded(false)}}
            className="
              relative
              text-sm text-purple-400
              transition
              hover:text-purple-300
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1.5px]
              after:w-0
              after:bg-purple-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Generate another image
          </button>

          {/* Download */}
          <a
            href={image}
            download
            className="
              px-8 py-3
              rounded-full
              bg-white/5
              backdrop-blur-md
              border border-purple-500/30
              text-white text-sm font-medium
              shadow-[0_12px_35px_rgba(168,85,247,0.35)]
              hover:bg-purple-600/20
              hover:scale-[1.04]
              transition
            "
          >
            Download Image
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
