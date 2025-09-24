import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaHospitalUser } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
  const [showOption, setShowOption] = useState(true);
  const navigate = useNavigate();

  return (
    <header className="relative sticky top-0 left-0 z-50">
      <div className="bg-gray-50 border-t border-gray-200 mt-auto shadow-sm">
        <div className="flex justify-between items-center h-16">
          <p 
            onClick={() => { navigate("/") }} 
            className="p-2 font-bold italic text-2xl cursor-pointer"
          >
            Jarurat Care
          </p>
          
          <div className="flex gap-2 px-3 md:flex hidden">
            <button 
              onClick={() => { navigate("/") }} 
              className="flex items-center px-3 py-1 rounded-md font-semibold bg-green-700 hover:bg-green-800 text-white duration-200"
            >
              <IoMdHome className="h-5 w-5 text-white mr-1"/>
              Home
            </button>
            <button 
              onClick={() => { navigate("/patient") }} 
              className="flex items-center px-3 py-1 rounded-md font-semibold bg-blue-600 hover:bg-blue-700 text-white duration-200"
            >
              <FaHospitalUser className="h-5 w-5 text-white mr-1" />
              Patient
            </button>
            <button 
              onClick={() => { navigate("/about") }} 
              className="flex items-center px-3 py-1 rounded-md font-semibold bg-gray-500 hover:bg-gray-600 text-white duration-200"
            >
              <FaCircleInfo className="h-5 w-5 mr-1 text-white"/>
              About Us
            </button>
          </div>
          
          <div className="px-3 md:hidden">
            <IoReorderThreeOutline 
              onClick={() => { setShowOption(!showOption) }} 
              className="h-8 w-8 mx-2 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className={`${showOption && 'hidden'} md:hidden absolute top-16 right-3 bg-gray-50 p-3 rounded-md shadow-lg`}>
        <div className="flex flex-col gap-3 items-center md:hidden">
          <button 
            onClick={() => { navigate("/") }} 
            className="flex items-center justify-center w-32 px-3 py-2 rounded-md font-semibold bg-green-700 hover:bg-green-800 text-white duration-200"
          >
            <IoMdHome className="h-5 w-5 text-white mr-2"/>
            Home
          </button>
          <button 
            onClick={() => { navigate("/patient") }} 
            className="flex items-center justify-center w-32 px-3 py-2 rounded-md font-semibold bg-blue-600 hover:bg-blue-700 text-white duration-200"
          >
            <FaHospitalUser className="h-5 w-5 text-white mr-2" />
            Patient
          </button>
          <button 
            onClick={() => { navigate("/about") }} 
            className="flex items-center justify-center w-32 px-3 py-2 rounded-md font-semibold bg-gray-500 hover:bg-gray-600 text-white duration-200"
          >
            <FaCircleInfo className="h-5 w-5 mr-2 text-white"/>
            About Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;