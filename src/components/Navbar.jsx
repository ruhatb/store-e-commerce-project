import { React, useState } from "react";

import { FaBasketShopping } from "react-icons/fa6";
import { FaSearch, FaHeart, FaBars } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element  ">
        <div className="navbar-start">
          {/* title /-*/}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-5xl items-center "
          >
            Bandage
          </NavLink>

          <div className="navbar-center  lg:flex sm:text-xl flex flex-col">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden sm:text-xl flex-col md:hidden"
              onClick={handleMenuToggle}
            >
              <FaBars className="h-6 w-6" />
            </label>
            <ul
              className={`lg:menu-horizontal menu ${
                isMenuOpen ? "block sm:flex" : "hidden sm:flex"
              } pl-6 sm:text-xl gap-6 flex-row  `}
            >
              <Navlinks />
            </ul>
          </div>
          <NavLink className="flex py-1 gap-1 justify-end ">
            <div className=" flex items-center max-sm:flex-col max-sm:text-2xl">
              <div className="items-center flex gap-1">
                <CiUser className="" />
                <div className=" font-bold leading-normal text-sm tracking-tight max-sm:text-2xl max-sm:font-normal items-center ">
                  <header className=" py-2 text-neutral-content">
                    <div className="align-element flex justify-center sm:justify-end">
                      {/*Userlinks*/}
                      <div className="flex gap-x-6 justify-center items-center">
                        <Link
                          to="/login"
                          className="link link-hover text-xs sm:text-sm"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="link link-hover text-xs  sm:text-sm pr-1"
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
              <div className="items-center flex max-sm:flex-col max-sm:text-2xl ">
                <FaSearch />
                <div className=" flex items-center p-4">
                  <FaBasketShopping className="pr-1 " />
                  <div className=" font-normal leading-none text-sm tracking-tight ">
                    1
                  </div>
                </div>
                <div className=" flex items-center p-4">
                  <FaHeart className="pr-1" />
                  <div className="font-normal leading-none text-sm tracking-tight">
                    1
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
