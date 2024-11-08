
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
     
      <div className="text-center">
        <a
          href="/"
          className="text-3xl font-bold text-stone-200 font-serif  hover:text-yellow-500 
            animate-typing cursor-default 
            font-dancing-script transform transition-all duration-700 ease-in-out 
            hover:scale-110 hover:rotate-3 b hover:translate-x-2 hover:translate-y-2"
        >
          Tanzeel's Khan Portfolio
        </a>
        </div>
        <div className="space-x-6">
        
          <a
            href="https://www.linkedin.com/in/tanzeel-naveed-660491312"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-yellow-500"
          >
            <FaLinkedin size={34} />
          </a>
       
          <a
            href="https://github.com/tanzeelnaveed8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-yellow-500"
          >
            <FaGithub size={34} />
          </a>
       
          <a
            href="mailto:tanzeelnaveed8@gmail.com" // Replace with your actual Gmail address
            className="text-xl hover:text-yellow-500"
          >
            <FaEnvelope size={34} /> {/* Envelope icon for Gmail */}
          </a>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
