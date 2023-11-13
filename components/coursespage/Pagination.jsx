import React from 'react'

const Pagination = ({len}) => {
    const perPage = 10

  return (
    <div className='flex items-center gap-2 my-4 justify-center w-full' >
        <button className=' text-white p-2 rounded-md font-bold bg-[#2e1792]' >{'<'}</button>
        <button className=' text-white p-2 rounded-md font-bold bg-[#ec397d]' >1</button>
        <button className=' text-white p-2 rounded-md font-bold bg-[#2e1792]' >{'>'}</button>
    </div>
  )
}

export default Pagination