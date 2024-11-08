'use client'; 
import React from 'react';
import Navbar from '@/app/components/navbar';
import  Hero from './components/contain'; 
import About from './components/about';
import Skills from './components/skills';
import HireMe from './components/hireme';
import Study from './components/student';
import Projects from './components/projects';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Study />
      <Projects />
      <HireMe />
      
    </div>
  );
};

export default Home;
