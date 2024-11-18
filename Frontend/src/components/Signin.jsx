import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
}

  return (
    <div className='w-screen h-screen bg-[url("/src/assets/background.jpg")] bg-cover flex justify-center items-center'>
      <form className='w-full h-full flex justify-center items-center' action="">
        <div className='w-1/4 h-[60%] p-10 rounded-md bg-gradient-to-r from-pink-600 to-red-600 flex flex-col justify-center items-center gap-1'>
          <div className='w-full flex flex-col gap-4'>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 rounded-md border-none outline-none text-gray-600'
              placeholder='enter email'
              type="email"
              name="email"
              id="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-3 py-2 rounded-md border-none outline-none text-gray-600'
              placeholder='enter password'
              type={isVisible ? "text" : "password"}
              name="password"
              id="password"
            />
          </div>
          <div className='w-full flex justify-between text-white'>
            <div className='flex gap-2'>
              <input
                checked={isVisible}
                onChange={(e) => setIsVisible(e.target.checked)}
                type="checkbox"
                name="show_password"
                id="show_password"
              />
              <label
                htmlFor="show_password"
              >
                Show Password
              </label>
            </div>
            <p className='transition-colors duration-300 hover:text-blue-600'>
              forget password
            </p>
          </div>
          <div className='w-full flex flex-col gap-5 mt-5'>
            <div className='w-full'>
              <button
                className='w-full bg-[#663FAE] p-2 px-3 rounded-md hover:bg-[#392167] active:bg-[#21123e] text-white font-bold text-sm'
                onClick={handleLogin}
                type='submit'>
                SignIn
              </button>
              <p className='mt-1 text-white text-sm'>
                New User?
                <Link
                  to={"/signup"}
                >
                  <span className='text-blue-600 inline-block ml-1'>
                    click here
                  </span>
                </Link></p>
            </div>
            <button
              className='bg-[#663FAE] p-2 px-3 rounded-md hover:bg-[#392167] active:bg-[#21123e] text-white font-bold text-sm'
              type='button'>
              SignIn with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signin