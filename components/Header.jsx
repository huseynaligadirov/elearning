'use client'
import { startup_name } from '@/common'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'



const Header = () => {
  return (
    <header className='py-4 bg-[#2e1792]' >
        <div className="container-main flex items-center justify-between ">
            <div className="logo font-bold text-[24px] text-white">
                {startup_name}
            </div>

            <Link href='/join/register' className='p-2 rounded-md bg-[#ec397d] text-white' >Join our platform</Link>


        </div>
    </header>
  )
}

export default Header

