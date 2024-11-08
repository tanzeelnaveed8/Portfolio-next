// HireMe.js
import React from 'react';
import Image from 'next/image';
import TanzeelPhoto from '../public/TanzeelPhoto.jpg'; // Replace with your actual photo in the public folder

const HireMe = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center mb-10 flex flex-col items-center">
      
        <div className="mb-6 content-center ">
          <Image
            src="/me.jpg" // Path to your photo in the 'public' folder
            alt="Tanzeel Naveed Khan"
            width={150}
            height={150}
            className="rounded-full border-4 border-yellow-500"
          />
        </div>

    {/* Introduction and Hire Me text */}
    <h1 className="text-3xl font-bold text-yellow-500 mb-4">Tanzeel Naveed Khan</h1>
        <p className="text-xl mb-6">
          Passionate Web Developer with expertise in both front-end and back-end technologies.
          Currently open to new opportunities and projects. Let's work together and build something amazing!
        </p>

        {/* Contact Me Button */}
        <a
          href="mailto:tanzeelnaveed8@gmail.com" // Replace with your actual email address
          className="bg-yellow-500 text-black py-2 px-6 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HireMe;
