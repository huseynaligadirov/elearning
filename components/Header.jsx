import Link from 'next/link'
import React from 'react'



const Header = () => {
  return (
    <header className='py-4 bg-[#2e1792]' >
        <div className="container-main flex items-center justify-between ">
            <div className="logo font-bold text-[24px] text-white">
                Learning
            </div>

            <button className='bg-[#ec397d] p-1 px-3 text-white rounded-3xl' >Contact us</button>
        </div>
    </header>
  )
}

export default Header

