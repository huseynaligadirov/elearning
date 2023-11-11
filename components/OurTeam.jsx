import React from 'react'
import pl from '@/public/placeholder.jpg'
import Image from 'next/image'

import hsynl from '@/public/huseynali.jpg'
import emil from '@/public/emil.jpg'
import fateh from '@/public/fateh.jpg'
import tahir from '@/public/tahir.jpg'

const team_members = [
    {
        name: 'Huseynali Gadirov',
        major: 'Frontend developer',
        icon: <Image  src={hsynl} className='rounded-full object-cover w-[130px] h-[130px]'/>
    },
    {
        name: 'Tahir Askarli',
        major: 'Data scientist',
        icon: <Image  src={tahir} className='rounded-full object-cover w-[130px] h-[130px]'/>
    },
    {
        name: 'Fateh Zaliev',
        major: 'Mobile developer',
        icon: <Image  src={fateh} className='rounded-full object-cover w-[130px] h-[130px]'/>
    },
    {
        name: 'Emil Rahimov',
        major: 'Backend developer',
        icon: <Image  src={emil} className='rounded-full object-cover w-[130px] h-[130px]'/>
    },
]

const OurTeam = () => {
  return (
    <div className='my-4 w-4/5 lg:w-3/5 mx-auto' >
    <h2 className='text-[24px] font-bold text-[#2e1792] text-center mb-8' >Our team</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
            team_members.map((member, index) => <div key={index} className='border-[1px] p-4 rounded-3xl flex  items-start  gap-8' >
            {member.icon}
            <h2 className='text-[24px] font-bold mt-4 text-[#2e1792] flex flex-col gap-1 items-start ' >
                {member.name}
                <span className='text-[#ec397d] text-[18px]' >{member.major}</span>                
            </h2>
        </div>)
        }



    </div>
</div>
  )
}

export default OurTeam