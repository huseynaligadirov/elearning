import Header from "@/components/Header";
import React from "react";
import photo from "@/public/Course-Thumbnail.webp";
import Image from "next/image";
import { startup_name } from "@/common";
import { Footer } from "../page";

import cons from '@/public/cons.png'
import sm from '@/public/smm.png'
import three from '@/public/3d.png'
import inv from '@/public/innov.jpg'
import mtn from '@/public/mentorship.jpg'
const page = () => {
  return (
    <>
      <Header />
      <section className="container-main py-7">
        <h1 className="text-[32px] font-bold text-center">About us</h1>

        <div className="grid grid-cols-1 gap-4 ">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div>
              <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
                {`Career Consulting: Navigating Futures with Expert Guidance`}
              </h2>
              <p className="text-[14px] font-medium text-black">
                {`At ${startup_name}, we go beyond the conventional to offer
                personalized consulting services. Our dedicated team of career
                experts is here to guide students in making informed decisions
                about their academic and professional paths. Whether you're a
                high school graduate exploring options or a professional seeking
                a career shift, our consulting services provide the compass you
                need to navigate your future.`}
              </p>
            </div>

            <Image className="rounded-3xl" src={cons} alt="" height={200} />
          </div>
        </div>

        <div className="h-[50px]"></div>

        <div className="grid grid-cols-1 gap-4 ">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <Image className="rounded-3xl  " src={sm} alt="" height={200} />
            <div>
              <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
                {`Subject Mastery: Tailored Learning for Individual Success`}
              </h2>
              <p className="text-[14px] font-medium text-black">
                {`Discover a tailored approach to subject mastery at{" "}
                ${startup_name}. Our platform is designed to cater to diverse
                learning needs, ensuring that each student can excel in subjects
                that resonate with their goals. With a curriculum aligned to
                industry demands, we empower students to develop expertise in
                areas that align with their passions and career aspirations.`}
              </p>
            </div>
          </div>
        </div>

        <div className="h-[50px]"></div>

        <div className="grid grid-cols-1 gap-4 ">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div>
              <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
                {`Revolutionizing Education with 3D Labs and Augmented Reality`}
              </h2>
              <p className="text-[14px] font-medium text-black">
                {`Step into the future of education with our state-of-the-art 3D
                labs and augmented reality experiences. ${startup_name}
                brings learning to life by integrating cutting-edge technology
                into the educational landscape. Immerse yourself in a world
                where theoretical concepts transform into tangible experiences,
                providing a deeper understanding of complex subjects. Augmented
                reality not only enhances education but also opens new
                dimensions of exploration for students.`}
              </p>
            </div>

            <Image className="rounded-3xl" src={three} alt="" height={200} />
          </div>
        </div>

        <div className="h-[50px]"></div>

        <div className="grid grid-cols-1 gap-4 ">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <Image className="object-cover w-[300px] rounded-3xl h-[200px]" src={inv} alt="" height={200} />
            <div>
              <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
                {`Innovative Learning Environments: Cutting-Edge Courses`}
              </h2>
              <p className="text-[14px] font-medium text-black">
                {`Explore a dynamic array of cutting-edge courses meticulously
                curated to keep pace with the ever-evolving landscape of
                knowledge. From emerging technologies to timeless disciplines,
                our courses are crafted to provide a balance between theory and
                practical application. ${startup_name} fosters an environment
                where curiosity is nurtured, and students are equipped with the
                skills needed to thrive in an ever-changing world.`}
              </p>
            </div>
          </div>
        </div>

        <div className="h-[50px]"></div>

        <div className="grid grid-cols-1 gap-4 ">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div>
              <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
                {"Visionary Mentors: Shaping Tomorrow's Leaders"}
              </h2>
              <p className="text-[14px] font-medium text-black">
                {"Meet the visionaries behind {startup_name}, our mentors who are" +
                " committed to shaping the leaders of tomorrow. Each mentor brings"+
                " a unique blend of expertise and experience, providing guidance"+
                " that extends beyond the classroom. As mentors, they play a"+
                " crucial role in empowering students with the knowledge and"+
                " skills needed to navigate the challenges of their chosen fields."}
              </p>
            </div>

            <Image src={mtn} className="rounded-3xl" alt="" height={200} />
          </div>
        </div>
        <div className="h-[50px]"></div>

      </section>

      <Footer/>
    </>
  );
};

export default page;
