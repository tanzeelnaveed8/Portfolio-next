// Skills.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGit, FaGithub } from 'react-icons/fa'; // Import icons
import { SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-500">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-12">
          
          <div className="flex flex-col items-center">
            <FaHtml5 size={50} className="text-orange-500" />
            <p className="mt-2">HTML5</p>
          </div>
          
          <div className="flex flex-col items-center">
            <FaCss3Alt size={50} className="text-blue-500" />
            <p className="mt-2">CSS3</p>
          </div>

          <div className="flex flex-col items-center">
            <FaJs size={50} className="text-yellow-300" />
            <p className="mt-2">JavaScript</p>
          </div>

          <div className="flex flex-col items-center">
            <FaReact size={50} className="text-blue-400" />
            <p className="mt-2">React</p>
          </div>

          <div className="flex flex-col items-center">
            <SiNextdotjs size={50} className="text-white" />
            <p className="mt-2">Next.js</p>
          </div>

          <div className="flex flex-col items-center">
            <FaNode size={50} className="text-green-500" />
            <p className="mt-2">Node.js</p>
          </div>

          <div className="flex flex-col items-center">
            <SiMongodb size={50} className="text-green-600" />
            <p className="mt-2">MongoDB</p>
          </div>

          <div className="flex flex-col items-center">
            <SiTailwindcss size={50} className="text-blue-300" />
            <p className="mt-2">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <FaGit size={50} className="text-orange-600" />
            <p className="mt-2">Git</p>
          </div>

          <div className="flex flex-col items-center">
            <FaGithub size={50} className="text-white" />
            <p className="mt-2">GitHub</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
