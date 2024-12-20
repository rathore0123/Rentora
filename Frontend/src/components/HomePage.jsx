import React from 'react'
import Card from './Card.jsx'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HomePage() {
    const scrollLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const scroll = (evt) => {
        evt.preventDefault();
        let slider = document.getElementById('slider');
        slider.scrollBy({
            left: evt.deltaY,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;

    }
    return (
        <>
            <div className='w-full bg-[url("/src/assets/background.jpg")] bg-cover p-5'>
                <div className='flex flex-col items-center gap-16'>
                    <h1 className='text-center text-white font-bold text-5xl'>
                        Discover Your New Home
                    </h1>
                    <Link to={"signup"}>
                        <button
                            className='bg-[#663FAE] p-2 px-3 rounded-md hover:bg-[#392167] active:bg-[#21123e] text-white font-bold text-xl'
                            type='button'>
                            Get Started
                        </button>
                    </Link>
                </div>
                <div className='flex flex-col justify-center items-center gap-10 mt-10'>
                    <h3 className='text-white text-center font-bold text-3xl'>Explore Rentals in India</h3>
                    <div className='flex w-full items-center justify-center'>
                        <div className='relative z-10 left-20 bg-slate-800 opacity-80 hover:opacity-100 rounded-full p-1 flex items-center justify-center'>
                            <FaCaretLeft
                                className='text-black text-3xl opacity-80 hover:opacity-100 cursor-pointer'
                                onClick={scrollLeft}
                            />
                        </div>
                        <div id='slider' onWheel={scroll} className="overscroll-contain scrollbar-hide md:scrollbar-default scroll-container w-full flex overflow-x-scroll scroll-smooth py-5">
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                            <Card
                                image="https://media.istockphoto.com/id/923155458/photo/downtown-los-angeles-aerial-cityscape.jpg?s=2048x2048&w=is&k=20&c=eA3RkfU3VSiNtCXXHbrjQwzQPeE5S41wEz2Gz6noOiw="
                                price="2000 Rs"
                                location="Jankipuram Vistar, Lucknow"
                                specifications={["2BHK", "4Bed", "2100SQFT", "View Map"]}
                                className="w-[250px] flex-shrink-0"
                            />
                        </div>
                        <div className='relative right-20 z-10 bg-slate-800 opacity-80 hover:opacity-100 rounded-full p-1 flex items-center justify-center'>
                            <FaCaretRight
                                className='text-black text-3xl opacity-80 hover:opacity-100 cursor-pointer'
                                onClick={scrollRight}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center w-screen bg-slate-700 py-10 gap-10 flex-col'>
                <h2 className='text-white font-bold text-4xl text-center'>Popular destinations in India</h2>
                <div className='w-[80%] flex flex-wrap gap-5 px-5 justify-center items-center'>
                    <div className='w-[350px]'>
                        <img
                            className='rounded-md w-[350px] h-[250px]'
                            src="/src/assets/img1.jpg"
                            alt="Image-1"
                        />
                        <h1 className='text-white font-bold text-2xl text-center'>New Delhi</h1>
                    </div>
                    <div className='w-[350px]'>
                        <img
                            className='rounded-md w-[350px] h-[250px]'
                            src="/src/assets/img2.jpg"
                            alt="Image-1"
                        />
                        <h1 className='text-white font-bold text-2xl text-center'>Bangalore</h1>
                    </div>
                    <div className='w-[350px]'>
                        <img
                            className='rounded-md w-[350px] h-[250px]'
                            src="/src/assets/img3.jpg"
                            alt="Image-1"
                        />
                        <h1 className='text-white font-bold text-2xl text-center'>Hyderabad</h1>
                    </div>
                    <div className='w-[350px]'>
                        <img
                            className='rounded-md w-[350px] h-[250px]'
                            src="/src/assets/img4.jpg"
                            alt="Image-1"
                        />
                        <h1 className='text-white font-bold text-2xl text-center'>Jaipur</h1>
                    </div>
                    <div className='w-[350px]'>
                        <img
                            className='rounded-md w-[350px] h-[250px]'
                            src="/src/assets/img5.jpg"
                            alt="Image-1"
                        />
                        <h1 className='text-white font-bold text-2xl text-center'>Varanasi</h1>
                    </div>
                    <div className='w-[350px]'>
                        <img
                            className='rounded-md w-[350px] h-[250px]'
                            src="/src/assets/img6.jpg"
                            alt="Image-1"
                        />
                        <h1 className='text-white font-bold text-2xl text-center'>Mumbai</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage