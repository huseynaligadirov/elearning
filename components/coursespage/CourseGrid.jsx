'use client'
import React from 'react'
import { PerCourse } from '../Swiper'

const CourseGrid = ({data}) => {
  return (
    <div className=' container-main grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 grid gap-4' >{
        data.map((x, index)=> <PerCourse key={index} data={x} />)
        }</div>
  )
}

export default CourseGrid