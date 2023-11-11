import React from "react";
import photo from "@/public/Course-Thumbnail.webp";
import Image from "next/image";
import Mentors from "./Mentors";

import mentorship from "@/public/mentorship.jpg";
import cons from '@/public/cons.png'
const MentorshipCons = () => {
  return (
    <div className="w-[70%] mx-auto grid grid-cols-1 gap-8 ">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div>
          <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
            Mentorship
          </h2>
          <p className="text-[14px] font-medium text-black">
            Mentorship, an intricate symbiosis of wisdom and guidance,
            transcends conventional tutelage. It embodies a dynamic exchange
            wherein seasoned sagacity converges with nascent potential,
            fostering not just skill acquisition but profound personal
            evolution. A mentor, a custodian of experiential reservoirs,
            bequeaths nuanced insights, catalyzing the protege's intellectual
            maturation. This alliance, a crucible of resilience and innovation,
            transcends the mere transference of knowledge, sculpting character
            and fortitude. A mentor becomes an architect of not just
            professional triumphs but a stalwart companion in the labyrinth of
            self-discovery. In this orchestration of mentorship, mastery begets
            legacy, weaving a tapestry where mentor and mentee coalesce in a
            harmonious continuum of enlightenment.
          </p>
        </div>

        <Image className="rounded-3xl" src={mentorship} alt="" height={250} />
      </div>
      <Mentors />
      <div className="flex flex-col lg:flex-row  items-center gap-8">
        <Image className="rounded-3xl" src={cons} alt="" height={250} />
        <div>
          <h2 className="text-[#2e1792] text-[24px] font-medium mb-4">
            Career Consultancy
          </h2>
          <p className="text-[14px] font-medium text-black">
            Career consultancy, a bespoke compass in the professional terrain,
            transcends traditional vocational guidance. It entails a meticulous
            fusion of introspection and strategic foresight, aligning individual
            aspirations with market dynamics. Seasoned consultants decode the
            intricate tapestry of industries, mapping personalized trajectories
            for career ascendancy. In this dynamic exchange, tailored advice
            burgeons, encompassing skill augmentation, networking finesse, and
            adaptive resilience. Beyond conventional counseling, modern career
            consultancy integrates technological trends and market intelligence,
            ensuring clients navigate the flux of contemporary workplaces
            adeptly. The synergy between consultant and client becomes a
            collaborative odyssey, navigating not just employment landscapes but
            sculpting a fulfilling professional narrative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorshipCons;
