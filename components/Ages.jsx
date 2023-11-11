import React from 'react'
import prm from '@/public/primary.png'
import snd from '@/public/secondary.png'
import high from '@/public/high.png'
import bach from '@/public/bach.png'
import master from '@/public/master.png'
import doctorate from '@/public/doctorate.png'
import Image from 'next/image'

const cats = [
    {
        name: 'Primary School', 
        icon: prm
    }, 
    {
        name: 'Secondary School',
        icon: snd
    },
    {
        name: 'High School',
        icon: high
    },
    {
        name: 'Bachelor`s', 
        icon: bach
    }, 
    {
        name: 'Master degree',
        icon: master
    },
    {
        name: 'Doctorate',
        icon: doctorate
    },
]


const Ages = () => {
  return (
    <div className="container-main">
        <div className="heading text-[32px] text-center font-bold mb-8 text-[#2e1792]">Age Categories</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 ">
            {
                cats.map((cat, index) => <div key={index} className='flex flex-col items-center gap-4' >
                <div> <Image src={cat.icon} alt='' width={70} height={70} /> </div>
                <h3 className='font-medium text-[18px] text-white bg-[#ec397d] py-1 px-2 rounded-md' >{cat.name}</h3>
            </div>)
            }
        </div>
    </div>
  )
}

export default Ages