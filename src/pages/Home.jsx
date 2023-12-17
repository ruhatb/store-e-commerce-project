import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

const Home = () => {
  return (
    <>  
    <nav >
    <span className='text-3xl' > 
<Navbar />
     </span>
      
    </nav>

    
    <footer>  
    <Footer />
    </footer>
    <Outlet />
    </>
  )
}

export default Home
