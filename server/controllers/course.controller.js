import { Course } from "../models/course.model";

export const createCouse=async (req,res)=>{
    try{
        const {courseTitle,category}=req.body;
        if(!courseTitle || !category){
            return res.json({
                success:false,
                message:"Course title and category required"
            })
        }

        const course=        await Course.create({
            courseTitle,
            category,
            creator:req.id
        })

        return res.json({
            success:true,
            message:"Course created successfully",
            course
        })

    } catch(error){
        console.log(error);
        return res.json({
            success:false,
            message:"Failed to create course"
        })
    }
}