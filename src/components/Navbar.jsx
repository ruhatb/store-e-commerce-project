import React from 'react'

import { FaBasketShopping } from "react-icons/fa6";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-base-200'>
    <div className='navbar align-element'>
<div className='navbar-start'>

{ /* title /-*/ }
<NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl items-center">

    Bandage
</NavLink>

<NavLink to="/cart" className="btn-x ml-3 "> 
<div className='indicator'>
<FaBasketShopping className='h-5 w-5'/>
<span className='badge'> 
5
</span>

</div>

</NavLink>
</div>

    </div>
      
    </nav>
  )
}

export default Navbar
