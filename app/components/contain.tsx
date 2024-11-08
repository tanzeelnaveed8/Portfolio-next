// Hero.js
import React from 'react';
import Image from 'next/image';
import TanzeelPhoto from '../public/TanzeelPhoto.jpg'; // Replace with your actual image in the 'public' folder

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8 relative">
      {/* Background Animation Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 opacity-50 blur-xl animate-pulse"></div>

      {/* Centered Content */}
      <div className="flex flex-col items-center relative z-10 text-center">
        {/* Stunning Image as Logo */}
        <div className="mb-6 relative">
          <Image
            src="/Me.png"
            alt="Tanzeel Naveed Khan"
            width={150} // Size for the logo effect
            height={150}
            className="rounded-full border-8 border-yellow-500 shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl font-bold text-white mb-4 animate__animated animate__fadeIn">
          Hello, I'm Tanzeel Naveed Khan
        </h1>
        <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
          A passionate Web Developer specializing in front-end and back-end technologies.<br />
          Welcome to my portfolio!
        </p>
      </div>
    </section>
  );
};

export default Hero;

