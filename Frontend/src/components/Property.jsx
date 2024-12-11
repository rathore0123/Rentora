import React, {useState} from "react";

import ImageSlider from '../components/ImageSilder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Ahouse1 from "../image/Ahouse1.webp";
import Ahouse2 from "../image/Ahouse2.webp";
import Ahouse3 from "../image/Ahouse3.webp";
import Ahouse4 from "../image/Ahouse4.webp";
import Ahouse5 from "../image/Ahouse5.webp";
import Bhouse1 from "../image/Bhouse1.webp";
import Bhouse2 from "../image/Bhouse2.webp";
import Bhouse3 from "../image/Bhouse3.webp";
import Bhouse4 from "../image/Bhouse4.webp";
import Chouse1 from "../image/Chouse1.webp";
import Chouse2 from "../image/Chouse2.webp";
import Chouse3 from "../image/Chouse3.webp";
import Chouse4 from "../image/Chouse4.webp";
import Chouse5 from "../image/Chouse5.webp";
import Dhouse1 from "../image/Dhouse1.webp";
import Dhouse2 from "../image/Dhouse2.webp";
import Dhouse3 from "../image/Dhouse3.webp";
import Dhouse4 from "../image/Dhouse4.webp";
import Dhouse5 from "../image/Dhouse5.webp";
import Ehouse1 from "../image/Ehouse1.webp";
import Ehouse2 from "../image/Ehouse2.webp";
import Ehouse3 from "../image/Ehouse3.webp";
import Ehouse4 from "../image/Ehouse4.webp";
import Ehouse5 from "../image/Ehouse5.webp";
import Fhouse1 from "../image/Fhouse1.webp";
import Fhouse2 from "../image/Fhouse2.webp";
import Fhouse3 from "../image/Fhouse3.webp";
import Fhouse4 from "../image/Fhouse4.webp";
import Fhouse5 from "../image/Fhouse5.webp";
import Ghouse1 from "../image/Ghouse1.webp";
import Ghouse2 from "../image/Ghouse2.webp";
import Ghouse3 from "../image/Ghouse3.webp";
import Ghouse4 from "../image/Ghouse4.webp";
import Hhouse1 from "../image/Hhouse1.webp";
import Hhouse2 from "../image/Hhouse2.webp";
import Hhouse3 from "../image/Hhouse3.webp";
import Hhouse4 from "../image/Hhouse4.webp";
import Ihouse1 from "../image/Ihouse1.webp";
import Ihouse2 from "../image/Ihouse2.webp";
import Ihouse3 from "../image/Ihouse3.webp";
import Ihouse4 from "../image/Ihouse4.webp";
import Ihouse5 from "../image/Ihouse5.webp";
import Jhouse1 from "../image/Jhouse1.webp";
import Jhouse2 from "../image/Jhouse2.webp";
import Jhouse3 from "../image/Jhouse3.webp";
import Jhouse4 from "../image/Jhouse4.webp";
import Jhouse5 from "../image/Jhouse5.webp";
import Khouse1 from "../image/Khouse1.webp";
import Khouse2 from "../image/Khouse2.webp";
import Khouse3 from "../image/Khouse3.webp";
import Khouse4 from "../image/Khouse4.webp";
import Lhouse1 from "../image/Lhouse1.webp";
import Lhouse2 from "../image/Lhouse2.webp";
import Lhouse3 from "../image/Lhouse3.webp";
import Lhouse4 from "../image/Lhouse4.webp";
import Mhouse1 from "../image/Mhouse1.webp";
import Mhouse2 from "../image/Mhouse2.webp";
import Mhouse3 from "../image/Mhouse3.webp";
import Mhouse4 from "../image/Mhouse4.webp";
import Nhouse1 from "../image/Nhouse1.webp";
import Nhouse2 from "../image/Nhouse2.webp";
import Nhouse3 from "../image/Nhouse3.webp";
import Nhouse4 from "../image/Nhouse4.webp";
import Ohouse1 from "../image/Ohouse1.webp";
import Ohouse2 from "../image/Ohouse2.webp";
import Ohouse3 from "../image/Ohouse3.webp";
import Ohouse4 from "../image/Ohouse4.webp";
import Phouse1 from "../image/Phouse1.webp";
import Phouse2 from "../image/Phouse2.webp";
import Phouse3 from "../image/Phouse3.webp";
import Qhouse1 from "../image/Qhouse1.webp";
import Qhouse2 from "../image/Qhouse2.webp";
import Qhouse3 from "../image/Qhouse3.webp";
import Qhouse4 from "../image/Qhouse4.webp";
import Rhouse1 from "../image/Rhouse1.webp";
import Rhouse2 from "../image/Rhouse2.webp";
import Rhouse3 from "../image/Rhouse3.webp";
import Rhouse4 from "../image/Rhouse4.webp";
import Shouse1 from "../image/Shouse1.webp";
import Shouse2 from "../image/Shouse2.webp";
import Shouse3 from "../image/Shouse3.webp";
import Shouse4 from "../image/Shouse4.webp";
import Thouse1 from "../image/Thouse1.webp";
import Thouse2 from "../image/Thouse2.webp";
import Thouse3 from "../image/Thouse3.webp";
import Thouse4 from "../image/Thouse4.webp";

function Property() {
  const sliderData = [
    {
      id: 1,
      images: [Ahouse1, Ahouse2, Ahouse3, Ahouse4, Ahouse5],
    },
    {
      id: 2,
      images: [Bhouse1, Bhouse2, Bhouse3, Bhouse4],
    },
    {
      id: 3,
      images: [Chouse1, Chouse2, Chouse3, Chouse4, Chouse5],
    },
    {
      id: 4,
      images: [Dhouse1, Dhouse2, Dhouse3, Dhouse4, Dhouse5],
    },
    {
      id: 5,
      images: [Ehouse1, Ehouse2, Ehouse3, Ehouse4, Ehouse5],
    },
    {
      id: 6,
      images: [Fhouse1, Fhouse2, Fhouse3, Fhouse4, Fhouse5],
    },
    {
      id: 7,
      images: [Ghouse1, Ghouse2, Ghouse3, Ghouse4],
    },
    {
      id: 8,
      images: [Hhouse1, Hhouse2, Hhouse3, Hhouse4],
    },
    {
      id: 9,
      images: [Ihouse1, Ihouse2, Ihouse3, Ihouse4, Ihouse5],
    },
    {
      id: 10,
      images: [Jhouse1, Jhouse2, Jhouse3, Jhouse4, Jhouse5],
    },
  
    {
      id: 11,
      images: [Khouse1, Khouse2, Khouse3, Khouse4],
    },

    {
      id: 12,
      images: [Lhouse1, Lhouse2, Lhouse3, Lhouse4],
    },
    {
      id: 13,
      images: [Mhouse1, Mhouse2, Mhouse3, Mhouse4],
    },
    {
      id: 14,
      images: [Nhouse1, Nhouse2, Nhouse3, Nhouse4],
    },
    {
      id: 15,
      images: [Ohouse1, Ohouse2, Ohouse3, Ohouse4],
    },
    {
      id: 16,
      images: [Phouse1, Phouse2, Phouse3],
    },
    {
      id: 17,
      images: [Qhouse1, Qhouse2, Qhouse3, Qhouse4],
    },
    {
      id: 18,
      images: [Rhouse1, Rhouse2, Rhouse3, Rhouse4],
    },
    {
      id: 19,
      images: [Shouse1, Shouse2, Shouse3, Shouse4],
    },
    {
      id: 20,
      images: [Thouse1, Thouse2, Thouse3, Thouse4],
    },
  ];
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    
    <div className="h-[510px] w-[730px] shadow-xl ml-[610px] mt-[130px] bg-white fixed right-0  ">
      <div className="h-[510px] w-[730px] overflow-hidden overflow-y-scroll">
        <div className="relative inline-block z-[4]" onBlur={() => setIsOpen(false)} tabIndex={0}>
            <button onClick={() => setIsOpen(!isOpen)} className="px-6 py-2 ml-[520px] mt-[20px]   border hover:shadow rounded text-black ">
              Sort : Default <FontAwesomeIcon icon={faChevronDown} />
            </button>
              {isOpen && (
                <ul className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg] ml-[510px]">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rent(Low to High)</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rent(High to Low)</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Posted on (New First)</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Posted on (Old First)</li>
                </ul>)}
        </div>
          <h1 className="text-2xl ml-[20px] mt-[-45px]">Rental Listing</h1>
          <p className="ml-[20px]">10,000 rent available</p>
          <br/>
            { sliderData.map((box) => (
              <div key={box.id} className="h-[280px] w-[330px] border  ml-[20px] mt-[10px] shadow inline-flex hover:shadow-md rounded-md">
                <ImageSlider images={box.images} />
                  <p><b><FontAwesomeIcon icon={faIndianRupeeSign}  className="mt-[185px] ml-[-320px]"/> 30000 + 2BHK</b></p>
                    <h2 className="mt-[200px] ml-[-320px]">Gardens at Cherry Creek 225 S Harrison</h2>
                    <button className="mt-[230px] ml-[-280px] border h-[40px] w-[100px] items-center">Booked</button>
                    <button className="mt-[230px] ml-[10px] border h-[40px] w-[160px] items-center">Contact to Owner</button>
                  <FontAwesomeIcon icon={faHeart} className="mt-[235px] h-[30px] ml-[10px] text-gray-400 "/>
            </div>
          ))}
      </div>
    </div>
    
    
    
    
  );
};


export default Property;
