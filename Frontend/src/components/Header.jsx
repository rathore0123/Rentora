import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { IoIosMenu } from 'react-icons/io'

function Header() {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  return (
    <div className='flex justify-between items-center px-12 py-2 bg-[#246186] h-[70px]'>
      {<div className='flex items-center justify-center gap-2 text-xl font-semibold text-white'>
        <IoIosMenu className='text-3xl font-extrabold' />
        <h3 className=''>
          Menu
        </h3>
      </div>}
      <div className='text-center'>
        <Link to={"/"}>
          <h1 className='text-4xl font-bold bg-clip-text bg-gradient-to-r from-green-600 to-red-800 text-transparent'>
            Rentora
          </h1>
        </Link>
      </div>
      <div className=''>
        <Link to={"signup"}>
          <button
            className='bg-[#663FAE] p-2 px-3 rounded-md hover:bg-[#392167] active:bg-[#21123e] text-white font-bold text-sm'
            type='button'>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header