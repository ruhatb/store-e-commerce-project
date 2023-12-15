import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const Home = () => {
  return (
    <>  
    <nav >
    <span className='text-3xl' > 
    <Navbar />
     </span>
      
    </nav>

    <Outlet />
    </>
  )
}

export default Home
