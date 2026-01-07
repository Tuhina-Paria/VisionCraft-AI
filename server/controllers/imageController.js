import userModel from "../models/userModel.js";
import imageModel from "../models/imageModel.js";
import cloudinary from "../config/cloudinary.js";
import FormData from "form-data";
import axios from "axios";
import crypto from "crypto";
import { resetCreditsIfNeeded } from "../utils/resetCredit.js";

/* ================= GENERATE IMAGE ================= */
export const generateImage = async (req, res) => {
  try {
    const userId = req.userId;
    const { prompt } = req.body;

    if (!userId || !prompt) {
      return res.json({ success: false, message: "Missing details" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // ✅ Reset credits after 24h
    await resetCreditsIfNeeded(user);

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "Daily limit reached",
        creditBalance: user.creditBalance,
      });
    }

    // 🔹 Call AI API
    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data).toString("base64");

    // 🔹 Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Image}`,
      {
        folder: "ai-images",
      }
    );

    // ✅ CREATE SHARE ID
    const shareId = crypto.randomBytes(8).toString("hex");

    // ✅ Save in MongoDB
    await imageModel.create({
      userId,
      imageUrl: uploadResult.secure_url,
      prompt,
      shareId,
    });

    // 🔹 Deduct credit
    user.creditBalance -= 1;
    await user.save();

    res.json({
      success: true,
      message: "Image generated",
      creditBalance: user.creditBalance,
      resultImage: uploadResult.secure_url,
      shareId, // 🔥 SEND TO FRONTEND
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

/* ================= MY IMAGES (PRIVATE) ================= */
export const getMyImages = async (req, res) => {
  try {
    const userId = req.userId;

    const images = await imageModel
      .find({ userId })
      .sort({ createdAt: -1 });

    res.json({ success: true, images });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

/* ================= PUBLIC SHARE IMAGE ================= */
export const getSharedImage = async (req, res) => {
  try {
    const { shareId } = req.params;

    const image = await imageModel.findOne({ shareId });

    if (!image) {
      return res.json({
        success: false,
        message: "Image not found",
      });
    }

    res.json({
      success: true,
      image,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};




/* ================= DOWNLOAD (LOGIN REQUIRED) ================= */
export const downloadImage = async (req, res) => {
  try {
    const { shareId } = req.params;

    const image = await imageModel.findOne({ shareId });
    if (!image) {
      return res.status(404).json({ success: false });
    }

    // 🔥 Fetch image from Cloudinary
    const response = await axios.get(image.imageUrl, {
      responseType: "arraybuffer",
    });

    res.set({
      "Content-Type": "image/png",
      "Content-Disposition": "attachment; filename=vision-craft.png",
    });

    res.send(response.data);
  } catch (err) {
    res.status(500).json({ success: false });
  }
};
