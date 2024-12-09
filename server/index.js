import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRoute from './routes/user.route.js';
import courseRoute from './routes/course.route.js'

const app=express()

dotenv.config()
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true,              // Allow cookies and credentials
  }))
app.use(express.json());

app.use("/api/user",userRoute)
app.use("/api/course",userRoute)

connectDB()

app.listen(3000,()=>{
    console.log("app is running")
})