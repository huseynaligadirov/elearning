import React from 'react'


const cats = [
    {
        name: 'Primary School', 
        icon: 'https://cdn-icons-png.flaticon.com/512/8313/8313527.png'
    }, 
    {
        name: 'Secondary School',
        icon: 'https://cdn-icons-png.flaticon.com/512/8074/8074797.png'
    },
    {
        name: 'High School',
        icon: 'https://cdn-icons-png.flaticon.com/512/8074/8074788.png'
    },
    {
        name: 'Bachelor`s', 
        icon: 'https://cdn-icons-png.flaticon.com/512/2677/2677319.png'
    }, 
    {
        name: 'Master degree',
        icon: 'https://cdn-icons-png.flaticon.com/512/7087/7087185.png'
    },
    {
        name: 'Doctorate',
        icon: 'https://cdn-icons-png.flaticon.com/512/3755/3755294.png'
    },
]


const Ages = () => {
  return (
    <div className="container-main">
        <div className="heading text-[32px] text-center font-bold mb-8 text-[#2e1792]">Age Categories</div>
        <div className="grid grid-cols-3 gap-8 ">
            {
                cats.map(cat => <div className='flex flex-col items-center gap-4' >
                <div> <img className='w-[70px] h-[70px]' src={cat.icon} alt="" /> </div>
                <h3 className='font-medium text-[18px] text-white bg-[#ec397d] py-1 px-2 rounded-md' >{cat.name}</h3>
            </div>)
            }
        </div>
    </div>
  )
}

export default Ages