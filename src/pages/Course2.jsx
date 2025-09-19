import React from 'react'
import AllCourse from './AllCourse'
import Hero2 from './Hero2'
import Hero from './Hero'
import Photo from './Photo'
import Footer from './Footer'
import Map from './Map'
import teachers from "../../public/teachers.png"

const Course2 = () => {
   const a=[0,1,2,3,4,5]
  return (
    <div>
            <div>
        
        <Hero/>
        <div className='absolute top-20 z-1  w-[80%]'>
<Hero2/>
        </div>
        
      <div>
 <h1 className='mx-0 text-2xl font-bold my-10'>
আমাদের কোর্স সমূহ</h1>
      
        <div className='grid md:grid-cols-3 gap-2 my-2'>

{
  a.map(aa=>
    <AllCourse/>
    
  )
}

        </div>
        <h1 className='mx-0 text-2xl font-bold my-1'>
আমাদের কোর্স সমূহ</h1>
        </div>
       
        
       
     <div className='hidden lg:block'>
          <Photo/>
      </div>
      <div className='lg:hidden block my-4'>
        <img className='mx-auto' src={teachers} alt="" />
      </div>
      <Map/>
      <Footer/>
       
     
      </div>
    </div>
  )
}

export default Course2
