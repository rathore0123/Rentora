import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

function Card({
    image,
    price,
    location,
    specifications = [],
    className,
}) {
    return (
        <div className={`card ${className} p-3 rounded-md bg-white mx-1 border-2 cursor-pointer hover:scale-105 duration-300`}>
            <img src={image} 
            alt="House_Image"
            className='w-full h-1/2 rounded-md '
            />
            <div className='house-details text-slate-600 font-semibold'>
                <p>Price: {price}</p>
                <p>{location}</p>
                <ul className="specification flex flex-wrap gap-x-3 w-full list-disc list-inside">
                    {specifications.map((spec, index) => (
                        <li
                            key={index}
                            className={spec === "View Map" ? "text-sky-600 flex items-center gap-2" : ""}
                        >
                            {spec === "View Map" ? (
                                <>
                                    <span>
                                        <FaMapMarkerAlt />
                                    </span>
                                    {spec}
                                </>
                            ) : (
                                spec
                            )}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Card