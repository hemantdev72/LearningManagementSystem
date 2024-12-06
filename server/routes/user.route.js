import express from 'express';
import { login,register, userProfile,logout, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from '../utils/multer.js';

const router=express.Router();

router.post('/login',login);
router.post('/register',register)
router.post('/logout',logout)
router.get('/profile',isAuthenticated,userProfile)
router.put("/profile/update",isAuthenticated, upload.single("profilePhoto"), updateProfile);

export default router;