import Ages from '@/components/Ages'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import Image from 'next/image'
import Swiper from '@/components/Swiper'
import MentorshipCons from '@/components/MentorshipCons'
import { startup_name } from '@/common'
export default function Home() {
  return (
    <>
    <Header/>
    <div className='h-[30px]' ></div>
    <Welcome/>
    <div className='h-[60px]' ></div>
    <Ages/>
    <div className='h-[60px]' ></div>
    <div className='bg-[#f8f8f8] py-4' >
    <div className='container-main' >
      <h2 className='my-4 text-[32px] text-[#2e1792] font-bold text-center' >Our courses</h2>
      <Swiper name='courses' />
    </div>
    </div>
    <div className='h-[60px]' ></div>
    <MentorshipCons/>

    <div className='h-[60px]' ></div>

<footer class=" rounded-lg shadow m-4 dark:bg-gray-800 bg-[#2e1792]">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">{startup_name}</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6 text-white">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline text-white">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </>

  )
}
