import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './pages/Course'
import Navbar from './pages/Navbar'
import Nav from './pages/Nav'
import Hero from './pages/Hero'
import Hero2 from './pages/Hero2'
import AbacusCoursePage from './pages/Cour'
import CourseCard from './pages/Cour'
import AllCourse from './pages/AllCourse'
import Photo from './pages/Photo'
import Footer from './pages/Footer'
import teachers from "../public/teachers.png"
import Map from './pages/Map'

function App() {
  const [count, setCount] = useState([6])
  const a=[0,1,2,3,4,5]
 
console.log(count)
  return (
    <>
      <div>
        <Nav/>
        <Hero/>
        <Hero2/>
      <div>
 <h1 className='mx-0 text-2xl font-bold my-1'>
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
       
        
       
    
       
     
      </div>
      
      <div className='hidden lg:block'>
          <Photo/>
      </div>
      <div className='lg:hidden block my-4'>
        <img className='mx-auto' src={teachers} alt="" />
      </div>
      <Map/>
      <Footer/>
    </>
  )
}

export default App
