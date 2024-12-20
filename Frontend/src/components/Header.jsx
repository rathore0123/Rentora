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
<<<<<<< HEAD
    <div className='flex justify-between items-center px-12 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 h-[70px]'>
      <div className='flex items-center justify-center gap-2 text-xl font-semibold text-white'>
        <div className='cursor-pointer text-3xl font-extrabold' onClick={toggleMenu}>
          {isMenuToggled ? (<MdClose />) : (<IoIosMenu />)}
        </div>
        <h3 onClick={toggleMenu} className='cursor-pointer'>
=======
    <div className='flex justify-between items-center px-12 py-2 bg-[#246186] h-[70px] fixed top-0 left-0 right-0'>
      {<div className='flex items-center justify-center gap-2 text-xl font-semibold text-white ml-[-30px]'>
        <IoIosMenu className='text-3xl font-extrabold' />
        <h3 className=''>
>>>>>>> 5d9db3108f6d90481df721dbe0098b383d006986
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
<<<<<<< HEAD
            className='bg-purple-700 p-2 px-3 rounded-md hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm shadow-md transition-colors duration-200'
=======
            className='bg-[#663FAE] p-2 px-3 rounded-md hover:bg-[#392167] active:bg-[#21123e] text-white font-bold text-sm mr-[-20px]'
>>>>>>> 5d9db3108f6d90481df721dbe0098b383d006986
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