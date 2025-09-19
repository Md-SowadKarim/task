import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='bg-purple-950 h-20 py-4'>
        <div className='md:w-[80%]  h-12 mx-auto gap-1  flex justify-center items-center'>
        <div className='bg-white p-1 rounded-2xl hidden lg:block'>
<p className='text-xs flex '>সকল কোর্স ^</p>
        </div>
        <div>
            
<form class="max-w-md mx-auto hidden lg:block">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-2 h-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="m-1 ps-7 text-xs text-gray-900 border border-gray-300 rounded-2xl bg-transparent" placeholder="এখানে সার্চ করুন" required />
         </div>
</form>

        </div>
        <div className='flex   justify-center items-center gap-2  '>
            <p className='flex items-center text-xs  gap-1 text-white'><NavLink to="/">ভাষা শিক্ষ</NavLink> <div className='h-4 bg-white w-0.5'></div> </p>
            <p className='flex items-center text-xs   gap-2 text-white'> <NavLink to="/course">কোর্স</NavLink> <div className='h-4 bg-white w-0.5'></div> </p>
            <p className='flex items-center text-xs  gap-1 text-left text-white'>ভেরিফাই সার্টিফিকেট  </p>
          
        </div>
        <div className='relative mx-5 hidden md:block'>
            
            <div className='bg-green-700 h-5 w-5 rounded-full'></div>
            <div className='bg-red-600 absolute h-3 w-3 rounded-full top-1 left-1'></div>
        </div>
        <div className=' mx-5 hidden md:block'>
            
            <div className='bg-white h-4 w-20 rounded-full relative'>
                <div className='bg-yellow-400  h-4 w-15 rounded-full absolute  left-0.5'><p className='text-xs'>Login</p></div>
            </div>
            
        </div>
        <div>
            
<img class="w-5 h-5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"/>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
