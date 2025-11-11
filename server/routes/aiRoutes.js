import express from "express"
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageOject, resumeReview } from "../controllers/aiController.js";
import { upload } from "../config/multer.js";
import { auth } from "../middlewares/auth.js";

const aiRouter=express.Router();

aiRouter.post('/generate-article',auth,generateArticle)
aiRouter.post('/generate-blog-title',auth,generateBlogTitle) 
aiRouter.post('/generate-image',auth,generateImage);
aiRouter.post('/remove-background',upload.single('image'),auth,removeImageBackground);
aiRouter.post('/remove-image-object',upload.single('image'),auth,removeImageOject);
aiRouter.post('/resume-review',upload.single('resume'),auth,resumeReview)



export default aiRouter