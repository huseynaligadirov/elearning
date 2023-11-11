'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import THUMB from '@/public/Course-Thumbnail.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {AiFillEye, AiFillStar} from 'react-icons/ai'
import {ImPriceTag} from 'react-icons/im'
import {FaChalkboardTeacher} from 'react-icons/fa'
import { FreeMode } from 'swiper/modules';
import Image from 'next/image';

import crs from '@/public/course.png'

const courses = [
    {
      "courseName": "Data Science Fundamentals",
      "categoryName": "Data Science",
      "lecturerName": "Dr. Johnson",
      "viewCount": 1800,
      "price": 49.99,
      "rate": 4.6
    },
    {
      "courseName": "Full Stack Web Development",
      "categoryName": "Web Development",
      "lecturerName": "Prof. Davis",
      "viewCount": 1500,
      "price": 59.99,
      "rate": 4.8
    },
    {
      "courseName": "Mobile App Development with React Native",
      "categoryName": "Mobile Development",
      "lecturerName": "Dr. Smith",
      "viewCount": 1200,
      "price": 39.99,
      "rate": 4.5
    },
    {
      "courseName": "Introduction to Artificial Intelligence",
      "categoryName": "Artificial Intelligence",
      "lecturerName": "Prof. Williams",
      "viewCount": 2000,
      "price": 69.99,
      "rate": 4.7
    },
    {
      "courseName": "User Interface (UI) Design Principles",
      "categoryName": "Design",
      "lecturerName": "Dr. Anderson",
      "viewCount": 800,
      "price": 29.99,
      "rate": 4.2
    },
    {
      "courseName": "Ethical Hacking and Penetration Testing",
      "categoryName": "Cybersecurity",
      "lecturerName": "Prof. Johnson",
      "viewCount": 1100,
      "price": 54.99,
      "rate": 4.9
    },
    {
      "courseName": "JavaScript Fundamentals",
      "categoryName": "Programming",
      "lecturerName": "Dr. Davis",
      "viewCount": 1700,
      "price": 44.99,
      "rate": 4.4
    },
    {
      "courseName": "Blockchain Basics",
      "categoryName": "Blockchain",
      "lecturerName": "Prof. Smith",
      "viewCount": 1300,
      "price": 64.99,
      "rate": 4.6
    },
    {
      "courseName": "Digital Marketing Strategies",
      "categoryName": "Marketing",
      "lecturerName": "Dr. Williams",
      "viewCount": 1600,
      "price": 49.99,
      "rate": 4.3
    },
    {
      "courseName": "Computer Networks and Security",
      "categoryName": "Networking",
      "lecturerName": "Prof. Anderson",
      "viewCount": 1400,
      "price": 59.99,
      "rate": 4.5
    }
  ]
  

export default function App({name}) {
  return (
    <>
      {
        name=='courses'?<Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,

          },
          768: {
            slidesPerView: 3,

          },
          1024: {
            slidesPerView: 4,

          },
        }}

        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {
            courses.map((course, index) => <SwiperSlide key={index} >
                <PerCourse data={course} />
            </SwiperSlide>)
        }
      </Swiper>:''
      }
    </>
  );
}


const PerCourse = ({data}) => {
    return <div className='rounded-xl overflow-hidden bg-white' >
        <div className='w-full h-[150px] flex items-center justify-center border-b-[1px]' ><Image className='w-[80px]'  src={crs} alt="" /></div>
        <div className="texts px-2 pt-2 pb-4 flex flex-col gap-2 items-start ">
            <h2 className='text-[#2e1792] font-bold text-[16px] my-2' >{data.courseName.slice(0,24)}...</h2>

            <div className="flex">
            <h2 className='flex items-center gap-2  font-bold text-[16px]' > <FaChalkboardTeacher color='#2e1792'/> {data.lecturerName}</h2>
            </div>

            <div className="flex  items-center gap-3">
            <div className='flex items-center gap-1' > <AiFillStar color='#ec397d' /> <h2 className='font-bold' >{data.rate}  </h2></div>
            <div className='flex items-center gap-1' > <AiFillEye color='#ec397d' /> <h2 className='font-bold' >{data.viewCount}</h2></div>
            <div className='flex items-center gap-1' > <ImPriceTag color='#ec397d' /> <h2 className='font-bold' >{data.price}</h2></div>
            </div>

        </div>
    </div>
}