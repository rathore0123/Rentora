import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Googlemap from "./Googlemap";

function Filter(){
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    return(
        <React.Fragment>
            <div className='h-[1000px] w-auto flex'>
                  <div className='h-[60px] w-auto border-0 shadow mt-[70px] fixed left-0 right-0'>
                        <input type="text" placeholder=" Search Location" className=' h-[43px] w-[530px] ml-[20px] mt-[9px] ps-3 border rounded' ></input>
                        <FontAwesomeIcon icon={faMagnifyingGlass}  className="ml-[-30px]"/>

                    <div className="relative inline-block text-left">
                        <button onClick={() => setIsOpen(!isOpen)} className="px-6 py-2 ml-[30px] mt-[-4px] border hover:shadow rounded text-black">
                        BHK <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                       {isOpen && (
                        <ul className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg]">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1RK</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1BHK</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">2BHK</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">3BHK</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">4BHK</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">4+BHK</li>
                        </ul>)}
                    </div>

                    <div className="relative inline-block text-left">
                        <button onClick={() => setIsOpen1(!isOpen1)} className="px-6 py-2 ml-[15px] border hover:shadow rounded text-black">
                        Price <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {isOpen1 && (
                        <ul className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Low-to-High</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">High-to-Low</li>
                        </ul>)}
                    </div>


                    <div className="relative inline-block text-left">
                        <button onClick={() => setIsOpen2(!isOpen2)} className="px-8 py-2 ml-[15px] mt-[-4px] border hover:shadow rounded text-black">
                        Furnishing <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                       {isOpen2 && (
                        <ul className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Full</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Semi</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Null</li>
                           
                        </ul>)}
                    </div>

                    <div className="relative inline-block text-left">
                        <button onClick={() => setIsOpen3(!isOpen3)} className="px-4 py-2 ml-[15px] border hover:shadow rounded text-black">
                        Property-Type <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {isOpen3 && (
                        <ul className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Family</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Company</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bachelor Male</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bachelor Female</li>
                        </ul>)}
                    </div>

                    <div className="relative inline-block text-left">
                        <button onClick={() => setIsOpen4(!isOpen4)} className="px-4 py-2 ml-[15px] border hover:shadow rounded text-black ">
                        Preferred Tenants <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {isOpen4 && (
                        <ul className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Apartment</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Independent House</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Independent Villa</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Gated Community Villa</li>
                        </ul>)}
                    </div>
                </div>
                <Googlemap/>
            </div>      
        </React.Fragment> 
    )
}

export default Filter;