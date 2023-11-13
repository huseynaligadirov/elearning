import Header from '@/components/Header'
import React from 'react'
import { Footer } from '../page'
import Heading from '@/components/coursespage/Heading'
import CourseGrid from '@/components/coursespage/CourseGrid'
import { courses } from '@/components/Swiper'
import Pagination from '@/components/coursespage/Pagination'

const page = () => {
  return (
    <>
    <Header/>
    <Heading/>
    <CourseGrid data={courses} />
    <Pagination/>
    <Footer/>
    </>
  )
}

export default page