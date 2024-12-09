import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const COURSE_API = "http://localhost:3000/api/course";

const courseApi=createApi({
    reducerPath:"courseApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"",
        credentials:"include"
    }),
    endpoints:(builder)=>({
        createCourse:builder.mutation({
            query:({ courseTitle, category })=>({
                url:"",
                method:"POST",
                body:{ courseTitle, category }
            })
        })
    }
)
})

export const {useCreateCourseMutation}=courseApi;