import React from 'react';
import { FaHeart, FaShieldAlt, FaUsers, FaBullseye } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

const About = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <MdHealthAndSafety className="h-16 w-16 text-blue-600 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Jarurat Care</h1>
          <p>
            A comprehensive Patient Records Dashboard designed to streamline healthcare management.
          </p>
        </div>
      </section>



      {/* Technology Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Built with Modern Technology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend Technologies</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• React.js for dynamic user interfaces</li>
                  <li>• React Hooks for state management</li>
                  <li>• Responsive CSS with Tailwind</li>
                  <li>• Modern JavaScript (ES6+)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Real-time data fetching</li>
                  <li>• Loading and error states</li>
                  <li>• Local state management</li>
                  <li>• Cross-device compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About;