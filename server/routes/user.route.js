import express from 'express';
import { login,register, userProfile,logout, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.jsx';
import upload from '../utils/multer.js';

const router=express.Router();

router.post('/login',login);
router.post('/register',register)
router.post('/logout',logout)
router.post('/profile',isAuthenticated,userProfile)
router.post("/profile/update",isAuthenticated, upload.single("profilePhoto"), updateProfile);

export default router;