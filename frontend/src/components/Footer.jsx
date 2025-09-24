import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-gray-50 border-t border-gray-200 px-6 py-4'>
      <p className='text-sm text-gray-600'>
        Made by Pratham Chaurasiya
      </p>
      <div className='flex gap-4'>
        <a 
          href="https://www.linkedin.com/in/pratham-chaurasiya-a3a96a251/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
        >
          <FaLinkedin className='h-5 w-5' />
        </a>
        <a 
          href="https://github.com/Pratham286" 
          target="_blank" 
          rel="noopener noreferrer"
          className='text-gray-600 hover:text-gray-900 transition-colors duration-200'
        >
          <FaGithub className='h-5 w-5' />
        </a>
      </div>
      <p className='text-sm text-gray-600 font-semibold'>
        Jarurat Care
      </p>
    </div>
  )
}

export default Footer;