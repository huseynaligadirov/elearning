import { startup_name } from "@/common";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div className="container-main flex flex-col items-center">
      <div className="grid grid-cols-[1fr_1fr] gap-8">
        <div>
            <img className="rounded-3xl" src="https://image.architonic.com/pfm3-3/2109175/verb-table-amb-16-0069301-b-arcit18.jpg" alt="" />
        </div>
        <div className="h-full flex flex-col items-start pt-4">
        <h2 className="font-bold text-[24px] text-[#2e1792]" >Welcome to {startup_name}: <br /> Where Learning Knows No Bounds</h2>
          <p className="my-8 font-medium text-[18px] w-4/5 " >
            Embark on an educational odyssey with {startup_name}, an
            avant-garde platform reshaping the traditional contours of learning.
            Our digital sphere isn't just an educational hub; it's a vibrant
            ecosystem meticulously crafted to empower individuals spanning
            various age demographics. Dive into a world where innovative
            courses, immersive labs, and insightful mentors converge to unlock
            limitless learning possibilities.
          </p>
          <Link href='/about' className="flex items-center gap-2 bg-[#ec397d] font-bold text-[20px] text-white py-1 px-3 rounded-lg" >Learn more about us!</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
