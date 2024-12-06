import Course from '@/components/Course';
import React from 'react'

const MyLearning = () => {
    const loading=false;
    const course=[1,2,3];

    return (
    <div className='max-w-4xl mx-auto px-10 sm:px-0'>
        <h1 className='font-bold text-3xl'>My Learning</h1>
        <div className='my-4'>
        {loading ? <MyLearningSkeleton /> : (course.length===0?<p className='text-xl text-center'>You have not enrolled in any course</p>:
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
       {course.map((item, index) => (
                            <Course key={index} />
                        ))}
        </div>)}
        </div>
    </div>
  )
}

export default MyLearning

// Skeleton component for loading state
const MyLearningSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
        ></div>
      ))}
    </div>
  );