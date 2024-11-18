import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(fullName, username, email, password);
        setFullName('');
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className='w-screen h-screen bg-[url("/src/assets/background.jpg")] bg-cover flex justify-center items-center'>
            <form className='w-full flex justify-center items-center' action="">
                <div className='w-1/4 p-10 rounded-md bg-gradient-to-r from-pink-600 to-red-600 flex flex-col justify-center items-center gap-1'>
                    <div className='w-full flex flex-col gap-4'>
                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className='w-full px-3 py-2 rounded-md border-none outline-none text-gray-600'
                            placeholder='enter name'
                            type="text"
                            name="name"
                            id="name"
                        />
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-full px-3 py-2 rounded-md border-none outline-none text-gray-600'
                            placeholder='enter username'
                            type="text"
                            name="username"
                            id="username"
                        />
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
                            <label htmlFor="show_password">
                                Show Password
                            </label>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5 mt-5'>
                        <div className='w-full'>
                            <button
                                className='w-full bg-[#663FAE] p-2 px-3 rounded-md hover:bg-[#392167] active:bg-[#21123e] text-white font-bold text-sm'
                                onClick={handleRegister}
                                type='submit'>
                                SignUp
                            </button>
                            <p className='mt-1 text-white text-sm'>
                                Already have an account?
                                <Link
                                    to={"/signin"}
                                >
                                    <span className='text-blue-600 inline-block ml-1'>
                                        click here
                                    </span>
                                </Link></p>
                        </div>
                        <button
                            className='bg-[#663FAE] p-2 px-3 rounded-md hover:bg-[#392167] active:bg-[#21123e] text-white font-bold text-sm'
                            type='button'>
                            SignUp with Google
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup