import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [error, setError] = useState("");

  const { generateImage, credit } = useContext(AppContext);

  // ---------------- GENERATE IMAGE ----------------
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const prompt = input.trim();

    // ❗ HARD VALIDATION (FIX YOUR BUG)
    if (!prompt) {
      setError("Please enter a prompt before generating.");
      return;
    }

    if (credit <= 0 || loading) return;

    setError("");

    try {
      setLoading(true);

      const img = await generateImage(prompt);

      if (img) {
        setImage(img);
        // setInput(""); // clear input after success
      } else {
        setError("Unable to generate image. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- DOWNLOAD IMAGE ----------------
  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "visioncraftAI.png";
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);

      toast.success("Image downloaded successfully.");
    } catch (err) {
      console.error(err);
      window.open(url, "_blank");
      toast.error("Download failed, opening image instead.");
    }
  };

  // ---------------- RESET ----------------
  const handleReset = () => {
    setImage(null);
    setInput("");
    setError("");
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
      {/* HEADER */}
      <div className="text-center mb-12 mt-20">
        <h1 className="text-white text-5xl md:text-6xl font-bold">
          Create Images
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          Turn ideas into visuals in seconds.
        </p>
      </div>

      {/* IMAGE PREVIEW */}
      {(loading || image) && (
        <div className="w-full flex flex-col items-center mt-16">
          {loading && (
            <div className="w-full max-w-4xl h-[250px] rounded-[28px] border border-white/10 bg-[#111] flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
                <p className="mt-6 text-white/70">
                  Creating your image...
                </p>
              </div>
            </div>
          )}

          {!loading && image && (
            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={image}
              alt="Generated"
              className="w-full max-w-4xl rounded-[28px] border border-white/10 shadow-2xl"
            />
          )}
        </div>
      )}

      {/* INPUT */}
      {!image && (
        <div className="mt-10 w-full max-w-2xl">
          <div className="flex flex-col gap-3 bg-[#0A0A0A] border border-white/10 rounded-[24px] p-4">

            {/* INPUT BOX */}
            {/* <div className="flex items-center gap-3 bg-[#0A0A0A] border border-white/10 rounded-full px-3 py-3"> */}
            < div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-4">
            <textarea
  disabled={loading}
  value={input}
  autoFocus
  rows={3}
  onChange={(e) => {
    setInput(e.target.value);
    if (error) setError("");
  }}
  placeholder="Describe what you want to create..."
  className="
    w-full
    resize-none
    bg-transparent
    outline-none
    text-white
    px-4
    py-2
    text-base
    placeholder:text-gray-500
    leading-7
  "
/>
            </div>

            {/* ERROR (FIXED POSITION) */}
            {error && (
              <p className="text-red-400 text-sm text-center">
                {error}
              </p>
            )}

            {/* BUTTON */}
            <div
              className="relative w-full"
              onMouseEnter={() => credit <= 0 && setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button
                type="submit"
                disabled={credit <= 0 || loading || !input.trim()}
                onClick={() => {
                  if (credit <= 0) {
                    setShowTooltip(true);
                    setTimeout(() => setShowTooltip(false), 2500);
                  }
                }}
                className={`w-full py-3 rounded-xl font-medium transition ${
                  credit <= 0
                    ? "bg-gray-600 cursor-not-allowed text-white/60"
                    : "bg-white text-black hover:opacity-90"
                }`}
              >
                {loading
                  ? "Generating..."
                  : credit <= 0
                  ? "Daily limit reached"
                  : "Generate"}
              </button>

              {credit <= 0 && showTooltip && (
                <div className="absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white bg-black/80 rounded-md">
                  You’ve used today’s free credits ✨
                </div>
              )}
            </div>

            {/* QUICK PROMPTS */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {[
                "Cinematic Portrait",
                "Cyberpunk City",
                "Luxury Watch",
                "Anime Character",
              ].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setInput(p)}
                  className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 hover:text-white"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ACTIONS */}
      {image && (
        <div className="mt-10 flex gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-8 py-3 rounded-full bg-white text-black"
          >
            + Create New Image
          </button>

          <button
            type="button"
            onClick={() => handleDownload(image)}
            className="px-8 py-3 rounded-full bg-white text-black"
          >
            ↓ Download
          </button>
        </div>
      )}
    </motion.form>
  );
};

export default Result;