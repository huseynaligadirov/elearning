import React from 'react'

const Heading = () => {
  return (
    <div className='container-main my-4' >
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr_1fr] gap-4">
            <div> <input placeholder='Example: Principles of OOP' type="text" name='search' className='p-2 outline-none rounded-md w-full border-[1px]'  /> </div>
            <div className='filters grid grid-cols-1 md:grid-cols-3 gap-2' >
                <select  name="topic" id="" className='py-2  border-[1px] rounded-md'>
                    <option value="0">Major</option>
                    <option value="1">Math</option>
                    <option value="2">Engineering</option>
                </select>
                <select name="lang" id="" className='py-2 outline-none border-[1px] rounded-md'>

                    <option value="0">Language</option>
                    <option value="1">Russian</option>
                    <option value="2">English</option>
                </select>
                <select name="Order for" id="" className='py-2 outline-none border-[1px] rounded-md'>
                    <option value="0">Order for</option>
                    <option value="1">Price</option>
                    <option value="2">Rating</option>
                </select>
            </div>
            <button className='bg-[#2e1792] py-2 text-white rounded-md' >Search</button>
        </div>
    </div>
  )
}

export default Heading