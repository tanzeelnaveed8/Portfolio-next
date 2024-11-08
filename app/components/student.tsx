// Study.js
import React from 'react';
import Image from 'next/image';
import GiaicLogo from '../public/giaic-logo.png'; // Make sure to place the logo image in your 'public' folder

const Study = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center mb-10 flex flex-col items-center">
        <Image
          src="/giaic.png"
          alt="GIAIC Logo"
          width={500}
          height={100}
          className="mb-6" // Adds spacing below the logo
        />
        <h1 className="text-4xl font-bold mb-4">Studying at GIAIC</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Currently a senior student specializing in Artificial Intelligence, Web 3.0, and Metaverse at GIAIC.
          Focused on developing skills in modern technology and creating innovative projects in the field of web development.
        </p>
        <a
          href="https://www.linkedin.com/school/governor-sindh-initiative-official/posts/?feedView=all"
          target="_blank"
          rel="https://linktr.ee/giaic"
          className="bg-yellow-500 text-black py-2 px-6 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Learn More about GIAIC
        </a>
      </div>
    </section>
  );
};

export default Study;
