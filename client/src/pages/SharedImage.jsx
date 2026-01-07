import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const SharedImage = () => {
  const { shareId } = useParams();
  const { token, setShowUserLogin } = useContext(AppContext);

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  /* ================= FETCH SHARED IMAGE ================= */
  useEffect(() => {
    if (!shareId) return;

    axios
      .get(`${backendUrl}/api/image/share/${shareId}`)
      .then((res) => {
        if (res.data.success) {
          setImage(res.data.image);
        } else {
          toast.error("Image not found");
        }
      })
      .catch(() => toast.error("Failed to load image"))
      .finally(() => setLoading(false));
  }, [shareId, backendUrl]);

  /* ================= DOWNLOAD HANDLER ================= */
  const handleDownload = () => {
    if (!token) {
      toast.info("Please login to download");
      setShowUserLogin(true); // 🔥 OPEN LOGIN MODAL
      return;
    }

    // native browser download
    const link = document.createElement("a");
    link.href = image.imageUrl;
    link.download = "visioncraft-ai.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading image...
      </div>
    );
  }

  if (!image) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/70">
        Image not available
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-24 text-white">

      {/* Image */}
      <img
        src={image.imageUrl}
        alt="Shared AI"
        className="max-h-[75vh] rounded-xl shadow-xl"
      />

      {/* Prompt */}
      {image.prompt && (
        <p className="text-white/60 text-sm mt-6 max-w-2xl text-center">
          {image.prompt}
        </p>
      )}

      {/* Actions */}
      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white text-sm"
      >
        Download Image
      </button>

      {/* Footer note */}
      {!token && (
        <p className="text-xs text-white/40 mt-3">
          Login required to download
        </p>
      )}
    </div>
  );
};

export default SharedImage;
