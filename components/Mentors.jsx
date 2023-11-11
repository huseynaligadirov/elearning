import React from 'react'
import pl from '@/public/placeholder.jpg'
import Image from 'next/image'

const mentors = [
    {
        name: 'Jhon doe',
        photo: ''
    }
]

const Mentors = () => {
  return (
    <div className='my-4' >
        <h2 className='text-[24px] font-bold text-[#2e1792] text-center mb-8' >Top mentors</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
            <div className='flex flex-col items-center gap-2' >
                <Image width={100} height={100} src={pl} className='rounded-full'/>
                <h2 className='text-[16px] font-bold text-[#2e1792]' >Desmond Blake</h2>
            </div>
            <div className='flex flex-col items-center gap-2' >
                <Image width={100} height={100} src={pl} className='rounded-full'/>
                <h2 className='text-[16px] font-bold text-[#2e1792]' >Gabrielle Lee</h2>
            </div>
            <div className='flex flex-col items-center gap-2' >
                <Image width={100} height={100} src={pl} className='rounded-full'/>
                <h2 className='text-[16px] font-bold text-[#2e1792]' >Wesley Morgan</h2>
            </div>
            <div className='flex flex-col items-center gap-2' >
                <Image width={100} height={100} src={pl} className='rounded-full'/>
                <h2 className='text-[16px] font-bold text-[#2e1792]' >Fiona O'Connor</h2>
            </div>
        </div>
    </div>
  )
}

export default Mentors