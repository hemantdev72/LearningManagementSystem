import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from '../utils/multer.js';
import { createCouse } from '../controllers/course.controller.js';

const router=express.Router();

router.get('/create',isAuthenticated,createCouse)

export default router;