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

    const scrollRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;

    }
    return (
        <div className='h-screen w-screen bg-[url("/src/assets/background.jpg")] bg-cover flex flex-col justify-between items-center p-5'>
            <div className='h-[40%] flex flex-col gap-5 justify-center items-center '>
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
            <div className='w-full flex flex-col items-center justify-center gap-5'>
                <h3 className='text-white text-center font-bold text-3xl'>Explore Rentals in India</h3>
                <div className='flex gap-5 w-[90%] items-center'>
                    <FaCaretLeft
                        className='text-black text-4xl opacity-50 hover:opacity-100 cursor-pointer'
                        onClick={scrollLeft}
                    />
                    <div id='slider' className="scroll-container w-[86%] flex overflow-x-scroll scroll-smooth py-5">
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
                    <FaCaretRight
                        className='text-black text-4xl opacity-50 hover:opacity-100 cursor-pointer'
                        onClick={scrollRight}
                    />
                </div>
            </div>

        </div>
    )
}

export default HomePage