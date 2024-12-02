import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'

const app=express()

dotenv.config()
app.use(cookieParser())
app.use(cors())
app.use(express.json());


app.listen(3000,()=>{
    console.log("app is running")
})