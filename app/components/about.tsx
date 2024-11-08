// /pages/about.tsx
import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500">
          About Me
        </h2>
        <p className="text-xl mb-8">
          Hi, I'm Tanzeel Naveed Khan, a passionate Web Developer who specializes in both front-end and back-end technologies. I have a strong foundation in JavaScript, React, Node.js, and modern frameworks like Next.js. I'm continuously learning and improving my skills to create interactive and visually appealing websites and applications.
        </p>
        <p className="text-xl mb-6">
          My goal is to craft seamless user experiences and solve real-world problems through innovative web solutions. When I am not coding, you can find me exploring new technologies, playing video games, or experimenting with design.
        </p>
      </div>
    </section>
  );
};

export default About;
