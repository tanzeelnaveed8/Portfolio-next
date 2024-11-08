import React from 'react';
import { FaFileAlt, FaLaptopCode, FaClock, FaShoppingCart, FaPen, FaCouch, FaUtensils } from 'react-icons/fa'; // Icons for the projects

const Projects = () => {
  // Define the list of projects with their name, description, and icon
  const projectList = [
    {
      name: "Resume Builder",
      description:
        "A custom-built resume builder where users can input their education, work experience, and download their resume as an image or PDF.",
      icon: <FaFileAlt size={40} className="text-yellow-500" />,  // Resume icon
      link: "https://www.linkedin.com/in/tanzeel-naveed-660491312/" // LinkedIn link
    },
    {
      name: "Restaurant Interface",
      description:
        "An intuitive UI designed for restaurant menus, booking systems, and order management, providing an elegant and responsive experience.",
      icon: <FaUtensils size={40} className="text-yellow-500" />,  // Utensils icon for restaurant
      link: "https://www.linkedin.com/in/tanzeel-naveed-660491312/" // LinkedIn link
    },
    {
      name: "Countdown Timer",
      description:
        "A simple yet effective countdown timer used for various purposes like events or product launches.",
      icon: <FaClock size={40} className="text-yellow-500" />,  // Clock icon
      link: "https://www.linkedin.com/in/tanzeel-naveed-660491312/" // LinkedIn link
    },
    {
      name: "Online Store",
      description:
        "An online e-commerce platform with dynamic product listings, secure checkout, and an easy-to-use admin panel.",
      icon: <FaShoppingCart size={40} className="text-yellow-500" />,  // Shopping cart icon
      link: "https://www.linkedin.com/in/tanzeel-naveed-660491312/" // LinkedIn link
    },
    {
      name: "Personal Portfolio",
      description:
        "A professional portfolio showcasing my skills, projects, and work experience, with animations and dynamic content.",
      icon: <FaLaptopCode size={40} className="text-yellow-500" />,  // Laptop code icon
      link: "https://www.linkedin.com/in/tanzeel-naveed-660491312/" // LinkedIn link
    },
    {
      name: "Furniture Store",
      description:
        "An elegant and user-friendly furniture store where users can browse through a wide selection of furniture items, add them to their cart, and proceed to a secure checkout.",
      icon: <FaCouch size={40} className="text-yellow-500" />,  // Couch icon for furniture store
      link: "https://www.linkedin.com/in/tanzeel-naveed-660491312/" // LinkedIn link
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">{project.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black py-2 px-6 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
