import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const MyImages = () => {
  const { backendUrl, token } = useContext(AppContext);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Toast message state
  const [toast, setToast] = useState("");

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  // Generate share URL from shareId
  const getShareUrl = (shareId) =>
    `${window.location.origin}/share/${shareId}`;

  // Show toast helper
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };

  // Fetch user's images
  const fetchMyImages = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/image/my-images`,
        { headers: { token } }
      );
      if (data.success) setImages(data.images);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyImages();
  }, []);

  // Handle next image in modal
  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Handle previous image in modal
  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Download image using fetch + blob
  const handleDownload = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error("Failed to fetch image");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "vision-craft.png"; // Customize filename if needed
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      showToast("Failed to download image");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/80">
        Loading your creations...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 max-w-7xl mx-auto text-white">
      {/* Heading */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold">My Images</h1>
        <p className="text-white/50 text-sm mt-1">
          Your AI-generated creations
        </p>
      </div>

      {images.length === 0 ? (
        <div className="text-center text-white/60 mt-20">
          You haven’t generated any images yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img._id}
              whileHover={{ scale: 1.02 }}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <img
                src={img.imageUrl}
                alt="generated"
                onClick={() => setSelectedIndex(index)}
                className="w-full h-56 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-4 flex justify-between text-sm">
                <button
                  onClick={() => handleDownload(img.imageUrl)}
                  className="text-purple-400 hover:text-purple-300"
                >
                  Download
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(getShareUrl(img.shareId));
                    showToast("Share link copied ✅");
                  }}
                  className="text-white/60 hover:text-white"
                >
                  Share Link
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-xl"
              >
                ✕
              </button>

              <img
                src={selectedImage.imageUrl}
                alt="preview"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />

              {/* Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full"
              >
                ›
              </button>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-between mt-4 text-sm text-white/70 gap-2">
                <p className="truncate max-w-full sm:max-w-[70%]">
                  {selectedImage.prompt || "AI Generated Image"}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleDownload(selectedImage.imageUrl)}
                    className="hover:text-white"
                  >
                    Download
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        getShareUrl(selectedImage.shareId)
                      );
                      showToast("Share link copied ✅");
                    }}
                    className="hover:text-white"
                  >
                    Share Link
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= TOAST ================= */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm shadow-lg z-50"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyImages;
