import React from 'react'
import babubook from "../../public/babubook.png"
import list from "../../public/list.png"
import CourseCard from './Cour'

const Hero2 = () => {
  return (
    <div className='md:flex  my-4 border border-purple-700 rounded-3xl w-[80%] mx-auto  relative'>
      <div className='h-full w-full bg-neutral-100 absolute rounded-3xl'></div>
        <div className='w-[50%] md:p-2 h-auto items-center' >
                 <div className="md:w-64 w-44  border-r-2 border-purple-500 p-4 relative">
        <div className=" h-10 bg-purple-600 w-1 right-[-3px] absolute ">
          
        </div>
        <nav>
          {['ক্যাডেট এডমিশন প্রস্তুতি',  'স্পোকেন ইংলিশ','অ্যাবাকাস মেন্টাল মেথ', 'স্পোকেন ইংলিশ', 'শিঙ্গাপুর মেথ','ক্যাডেট এডমিশন প্রস্তুতি', 'অ্যাবাকাস মেন্টাল মেথ', 'স্পোকেন ইংলিশ', 'শিঙ্গাপুর মেথ'].map((item, index) => (
            <div 
              key={index} 
              className={`md:py-3 w-full px-1 py-1 mb-2 text-left text-xs rounded-4xl border-2 border-purple-500 cursor-pointer transition-all duration-200 ${
                index === 1 ? ' border-l-4 bg-orange-300 border-purple-600 font-medium' : 'hover:bg-purple-50'
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>
        </div>
        <div className='md:w-[90%] w-full h-auto md:pl-20 '>

<div className='md:h-100 h-auto  items-center relative flex-col '>
    <CourseCard/>
    
    <img className='h-60 w-50 md:absolute top-5 right-20' src={babubook} alt="" /> 
</div>
        </div>
      
    </div>
  )
}

export default Hero2
