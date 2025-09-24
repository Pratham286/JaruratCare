import React from 'react';
import { FaUsers, FaSearch, FaPlus, FaShieldAlt, FaClock, FaChartBar } from 'react-icons/fa';
import { MdDashboard, MdHealthAndSafety } from 'react-icons/md';
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const handleNavigation = (path) => {
  //   console.log(`Navigate to: ${path}`);
  // };

  const features = [
    {
      icon: <FaUsers className="h-8 w-8" />,
      title: "Patient Management",
    },
    {
      icon: <FaSearch className="h-8 w-8" />,
      title: "Smart Search",
    },
    {
      icon: <MdDashboard className="h-8 w-8" />,
      title: "Dashboard View",
    },
    {
      icon: <FaPlus className="h-8 w-8" />,
      title: "Add New Patients",
    },
    {
      icon: <FaClock className="h-8 w-8" />,
      title: "Real-time Updates",
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50'>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <MdHealthAndSafety className="h-16 w-16 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">Jarurat Care</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive Patient Records Dashboard designed to streamline healthcare management. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/patient")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                View Patients Dashboard
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white duration-200 rounded-md font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Features for Healthcare Management
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex    bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-blue-600  mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;