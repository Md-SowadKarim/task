import React from 'react'

import { Outlet } from 'react-router-dom'
import Nav from '../pages/Nav'


const MainLayout = () => {
  return (
    <div className='container mx-auto'>
      <Nav/>
      <Outlet/>
   
    </div>
  )
}

export default MainLayout
