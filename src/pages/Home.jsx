import React from 'react'
import { Outlet } from 'react-router-dom';
import { Hero, Navbar } from '../components';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import CardComponent from '../components/CardComponent';

const Home = () => {
  return (
    <>  
    <nav >
      <span> <Header /></span>
    <span className='text-3xl' > 
<Navbar />
     </span>
      
    </nav>
<Hero />
<CardComponent />
    
    <footer>  
    <Footer />
    </footer>
    <Outlet />
    </>
  )
}

export default Home
