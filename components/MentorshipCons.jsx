import React from "react";
import photo from '@/public/Course-Thumbnail.webp'
import Image from "next/image";
const MentorshipCons = () => {
  return (
    <div className="w-[70%] mx-auto grid grid-cols-1 gap-8 ">
      <div className="flex items-center gap-8">
        <div>
          <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
            Mentorship
          </h2>
          <p className="text-[14px] font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            labore? Adipisci doloremque consequuntur repellendus voluptatem
            corrupti id non ab? Praesentium aut repudiandae cumque similique
            nisi labore obcaecati. Saepe tenetur explicabo nostrum impedit
            magnam corporis sequi officia aspernatur id, deleniti amet, maxime
            doloribus consectetur tempora minima error alias. Necessitatibus
            inventore magni eos consequatur sunt. Officia consequatur fugit odit
            cum cupiditate at harum esse? Veniam sint eaque at inventore
            quaerat, ducimus, molestiae maiores, quam quo voluptatum quidem
            laborum vero in. Perferendis laborum sequi voluptate iusto, enim,
            nesciunt vel accusantium, impedit totam modi animi praesentium ut
            maxime ?
          </p>
        </div>

        <Image src={photo} alt="" height={250} />
      </div>
      {/*  */}
      <div className="flex items-center gap-8">
      <Image src={photo} alt="" height={250} />
        <div>
          <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
            Mentorship
          </h2>
          <p className="text-[14px] font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            labore? Adipisci doloremque consequuntur repellendus voluptatem
            corrupti id non ab? Praesentium aut repudiandae cumque similique
            nisi labore obcaecati. Saepe tenetur explicabo nostrum impedit
            magnam corporis sequi officia aspernatur id, deleniti amet, maxime
            doloribus consectetur tempora minima error alias. Necessitatibus
            inventore magni eos consequatur sunt. Officia consequatur fugit odit
            cum cupiditate at harum esse? Veniam sint eaque at inventore
            quaerat, ducimus, molestiae maiores, quam quo voluptatum quidem
            laborum vero in. Perferendis laborum sequi voluptate iusto, enim,
            nesciunt vel accusantium, impedit totam modi animi praesentium ut
            maxime ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorshipCons;
