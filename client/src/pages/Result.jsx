import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const { generateImage, credit } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input || credit === 0) return;

    setLoading(true);
    const img = await generateImage(input);

    if (img) {
      setImage(img);
      setIsImageLoaded(true);
    }

    setLoading(false);
  };

  const handleDownload = async (url) => {
    try {
      // Fetch the image as a blob
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();

      // Create a temporary link to trigger download
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;

      // You can name the downloaded file here
      link.download = "visioncraftAI.png";

      // Append to body, click to download, and remove
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Release the object URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image. Please try again.");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="min-h-[90vh] flex flex-col items-center justify-center px-4"
    >
      {/* IMAGE PREVIEW */}
      <div className="w-full flex flex-col items-center">
        <div className="relative mt-20">
          <img
            src={image}
            alt="Generated"
            className="
              w-[320px] sm:w-[420px]
              rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.55)]
              border border-white/10
            "
          />

          {loading && (
            <span
              className="
                absolute bottom-0 left-0 h-[2px] w-full
                bg-gradient-to-r from-purple-500 to-fuchsia-500
                animate-pulse
              "
            />
          )}
        </div>

        {loading && (
          <p className="mt-4 text-xs text-white/60 tracking-wide">
            Generating image…
          </p>
        )}
      </div>

      {/* INPUT */}
      {!isImageLoaded && (
        <div className="mt-10 w-full max-w-md">
          <div
            className="
              flex flex-col gap-3
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-2xl
              p-2
            "
          >
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Describe what you want to generate"
              className="
                w-full bg-transparent text-white text-sm
                px-4 py-3 outline-none
                placeholder:text-white/40
              "
            />

            {/* BUTTON + TOOLTIP */}
            <div
              className="relative w-full"
              onMouseEnter={() => credit === 0 && setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button
                type="submit"
                disabled={credit === 0 || loading}
                onClick={() => {
                  if (credit === 0) {
                    setShowTooltip(true);
                    setTimeout(() => setShowTooltip(false), 2500);
                  }
                }}
                className={`
                  w-full py-3 rounded-xl font-medium transition
                  ${
                    credit === 0
                      ? "bg-gray-600 cursor-not-allowed text-white/60"
                      : "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 shadow-[0_10px_30px_rgba(168,85,247,0.45)]"
                  }
                `}
              >
                {credit === 0 ? "Daily limit reached" : "Generate Image"}
              </button>

              {credit === 0 && showTooltip && (
                <div
                  className="
                    absolute -top-11 left-1/2 -translate-x-1/2
                    px-3 py-1 rounded-md text-xs text-white
                    bg-black/80 backdrop-blur-md
                    shadow-lg whitespace-nowrap
                  "
                >
                  You’ve used today’s 5 free images. Fresh credits arrive in 24
                  hours ✨
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ACTIONS */}
      {isImageLoaded && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setIsImageLoaded(false);
              setInput("");
              setImage(assets.sample_img_1);
            }}
            className="
              relative text-sm text-purple-400 transition
              hover:text-purple-300
              after:absolute after:left-0 after:-bottom-1
              after:h-[1.5px] after:w-0 after:bg-purple-500
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Generate another image
          </button>

          <button
            type="button"
            onClick={() => handleDownload(image)}
            className="
              px-8 py-3 rounded-full
              bg-white/5 backdrop-blur-md
              border border-purple-500/30
              text-white text-sm font-medium
              shadow-[0_12px_35px_rgba(168,85,247,0.35)]
              hover:bg-purple-600/20 hover:scale-[1.04]
              transition
            "
          >
            Download Image
          </button>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
