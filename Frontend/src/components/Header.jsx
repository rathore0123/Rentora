import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { IoIosMenu } from 'react-icons/io'
import { MdClose } from "react-icons/md";

function Header() {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  const toggleMenu = () => {
    setIsMenuToggled((prev) => !prev);
  }

  return (
    <div className='flex justify-between items-center px-12 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 h-[70px]'>
      <div className='flex items-center justify-center gap-2 text-xl font-semibold text-white'>
        <div className='cursor-pointer text-3xl font-extrabold' onClick={toggleMenu}>
          {isMenuToggled ? (<MdClose />) : (<IoIosMenu />)}
        </div>
        <h3 onClick={toggleMenu} className='cursor-pointer'>
          Menu
        </h3>
      </div>
      <div className='text-center'>
        <Link to={"/"}>
          <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600'>
            Rentora
          </h1>
        </Link>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Link to={"signup"}>
          <button
            className='bg-purple-700 p-2 px-3 rounded-md hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm shadow-md transition-colors duration-200'
            type='button'>
            Sign Up
          </button>
        </Link>
        <Link to={"/signin"}>
          <button
            className='bg-purple-700 p-2 px-3 rounded-md hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm shadow-md transition-colors duration-200'
            type='button'>
            Log In
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header