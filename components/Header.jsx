import { startup_name } from '@/common'
import Link from 'next/link'
import React from 'react'



const Header = () => {
  return (
    <header className='py-4 bg-[#2e1792]' >
        <div className="container-main flex items-center justify-center ">
            <div className="logo font-bold text-[24px] text-white">
                {startup_name}
            </div>


        </div>
    </header>
  )
}

export default Header

