import React from 'react'
import babu from '../../public/babu.png'
import rocket from '../../public/rocket.png'
import hati from '../../public/hati.png'
import tomtom from '../../public/tomtom.png'
import moumachi from '../../public/moumachi.gif'
import megh from '../../public/megh.png'

const Hero = () => {
  return (
    <div>
      <div className='  md:flex  items-center  my-2 gap-1  '>
        <div className=' w-[90%]'>
            <div className='h-100 relative flex justify-center items-center'>
                <img className='h-90 md:w-100 mx-auto md:top-2  top-10 left-0 absolute ' src={megh} alt="" />
                <img className='h-90 md:w-100 mx-auto left-10 md:top-10 top-20 md:left-40 absolute ' src={megh} alt="" />
                <img className='h-80 w-60 mx-auto absolute md:top-[-30px]  md:left-45' src={babu} alt="" />
                <img className='h-60 md:h-70 w-50 mx-auto absolute top-35 md:top-25  md:left-50 rotate-18' src={rocket} alt="" />
            </div>
        </div>
        <div className=' w-[90%] relative '>
          <div className=''>
              <div className='pt-15 '>
              <h1 className='text-4xl text-purple-900 font-extrabold  md:text-left'>
                সেরা শিক্ষকদের সাথে <br />
              </h1>
              <h1 className='text-4xl text-yellow-300 md:text-left font-extrabold '>
                সন্তানের শেখাও হোক সেরা
              </h1>
              <p className='leading-4 mx-auto md:mx-0 md:my-2 tracking-wider text-xs md:text-left text-purple-900 w-[70%]'>একাডেমিক থেকে দক্ষতা উন্নয়নে এডুটিউন আছে আপনার শিক্ষাকে আরও সহজ করতে। শিক্ষার্থীদের গাণিতিক, মানসিক, প্রযুক্তিগত এবং ভাষাগত দক্ষতা বৃদ্ধি করে তাদেরকে চতুর্থ শিল্প বিপ্লবের একজন যোগ্য নাগরিক হিসাবে গড়ে তোলাই আমাদের প্রধান লক্ষ্য।</p>
            </div>
           
              

<div class=" rounded-md gap-1 p-2 shadow-xs my-2 text-left " role="group">
  <button type="button" class=" px-6 py-1 rounded-l-3xl text-xs border-amber-400 border text-white font-medium bg-purple-950 ">
    ফ্রি ক্লাস
  </button>
  <button type="button" class="px-6 py-1 text-xs rounded-r-3xl border-amber-400 border text-white font-medium bg-purple-950 ">
 কমিউনিটি
  </button>
  
</div>
<div className=' h-50 md:pt-20 flex '>
<img className='md:right-5 absolute right-0 h-50  md:top-50' src={hati} alt="" />
<img className='md:h-30 h-25 absolute md:right-45 bottom-1 right-27  md:top-65' src={tomtom} alt="" />
<img className='h-15 absolute md:right-55 md:bottom-45' src={moumachi} alt="" />
</div>
          </div>

            
        </div>
        

      </div>
    </div>
  )
}

export default Hero
