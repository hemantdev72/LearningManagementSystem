import express from 'express';
import { login,register, userProfile,logout } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.jsx';

const router=express.Router();

router.post('/login',login);
router.post('/register',register)
router.post('/logout',logout)
router.post('/profile',isAuthenticated,userProfile)

export default router;