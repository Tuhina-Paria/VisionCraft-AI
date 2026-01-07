import express from 'express'
import { downloadImage, generateImage, getMyImages, getSharedImage } from '../controllers/imageController.js'
import userAuth from '../middlewares/auth.js'

const imageRouter=express.Router()

imageRouter.post('/generate-image',userAuth, generateImage )
imageRouter.get("/my-images", userAuth, getMyImages);
// 🌍 Public (NO AUTH)
imageRouter.get("/share/:shareId", getSharedImage);
imageRouter.get("/download/:shareId", userAuth, downloadImage);

export default imageRouter

