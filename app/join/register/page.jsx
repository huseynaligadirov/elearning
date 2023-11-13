'use client'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const [cont, setCont] = useState(0)
  return (
    <div className='w-full h-screen bg-[#2e1792] flex items-center justify-center ' >
        <div className="register">
          <div className="heading min-w-[400px]">
          <div className='w-full py-2 bg-white my-2 text-[#2e1792] text-center font-medium'>Join our platform as</div>
            <div className="tabs grid grid-cols-3  gap-2">
                <button style={{borderColor: cont==0?'white':'#ec397d'}} onClick={()=> setCont(0)} className='border-2 bg-[#ec397d] text-white p-2' >Student</button>
                <button style={{borderColor: cont==1?'white':'#ec397d'}} onClick={()=> setCont(1)} className='border-2 bg-[#ec397d] text-white p-2' >Mentor</button>
                <button style={{borderColor: cont==2?'white':'#ec397d'}} onClick={()=> setCont(2)} className='border-2 bg-[#ec397d] text-white p-2' >Consultant</button>
            </div>
            {
              cont==0?<Student/>:cont==1?<Mentor/>:<Consultant/>
            }

            <Link className='bg-white p-2 rounded-md block mt-2 text-center' href={'/dashboard'} >Join to LearnEon</Link>
          </div>
        </div>
    </div>
  )
}

export default page


const Mentor = () => {
  return <form action="" className='flex flex-col gap-2 mt-2'>
    <div className="grid grid-cols-2 gap-2">
    <CustomInput type={'text'} pl='First Name' />
    <CustomInput type={'text'} pl='Last Name' />
    </div>

    <CustomInput type={'text'} pl='Email' />

    <div className="grid grid-cols-2 gap-2">
    <CustomInput type={'text'} pl='Create Password' />
    <CustomInput type={'text'} pl='Confirm Password' />
    </div>

    <CustomInput type={'text'} pl='Country' />
    <CustomInput type={'text'} pl='Age Category' />
    <CustomInput type={'text'} pl='University' />
    <CustomInput type={'text'} pl='Major' />
    
  </form>
}
const Student = () => {
  return <form action="" className='flex flex-col gap-2 mt-2'>
    <div className="grid grid-cols-2 gap-2">
    <CustomInput type={'text'} pl='First Name' />
    <CustomInput type={'text'} pl='Last Name' />
    </div>

    <CustomInput type={'text'} pl='Email' />

    <div className="grid grid-cols-2 gap-2">
    <CustomInput type={'text'} pl='Create Password' />
    <CustomInput type={'text'} pl='Confirm Password' />
    </div>

    <CustomInput type={'text'} pl='Country' />
    <CustomInput type={'text'} pl='Age Category' />
    <CustomInput type={'text'} pl='İnterested field' />
    
  </form>
}
const Consultant = () => {
  return <form action="" className='flex flex-col gap-2 mt-2'>
    <div className="grid grid-cols-2 gap-2">
    <CustomInput type={'text'} pl='First Name' />
    <CustomInput type={'text'} pl='Last Name' />
    </div>

    <CustomInput type={'text'} pl='Email' />

    <div className="grid grid-cols-2 gap-2">
    <CustomInput type={'text'} pl='Create Password' />
    <CustomInput type={'text'} pl='Confirm Password' />
    </div>

    <CustomInput type={'text'} pl='Country' />
    <CustomInput type={'text'} pl='Major' />
    
  </form>
}


const CustomInput =  ({pl, type}) => {
  return <>
  <input className='w-full outline-none border-[1px] p-2 rounded-md' type={type} placeholder={pl}  />
  </>
}