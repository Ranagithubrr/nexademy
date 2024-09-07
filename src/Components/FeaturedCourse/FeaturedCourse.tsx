import React from 'react'
import CourseCard from '../CommonComponents/CourseCard'

const FeaturedCourse = () => {
    return (
        <div className='px-4 lg:px-0'>
            <h4 className='text-2xl font-semibold'>Featured Course</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

export default FeaturedCourse