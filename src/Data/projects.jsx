import { FaReact, FaCss3Alt, FaCube, FaBlender, FaCloud, FaJsSquare, FaDatabase, FaGem, FaTools } from "react-icons/fa";
import { SiVite, SiRubyonrails } from "react-icons/si";

const projects = [
  {
    name: "DnDwellers",
    description: "From race and class to spells, stats, and gear. DnDwellers gives adventurers a sleek UI to craft unique heroes, then review their completed character sheet in a clean, readable format.",
    link: "https://dndweller.onrender.com/",
    techStack: [
      { name: "React", icon: <FaReact className="text-blue-400 text-xl" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500 text-xl" /> },
      { name: "CSS Modules", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      { name: "Ruby on Rails API", icon: <SiRubyonrails className="text-red-500 text-xl" /> },
    ],
  },
  {
    name: "Darth Revan 3D Model",
    description: "This is an original 3D character design I created, inspired by Darth Revan from Knight of the old republic and ancient warrior aesthetics. Modeled in Blender with attention to detail and creative interpretation — ideal for use in custom projects or concept art.",
    link: "https://sketchfab.com/3d-models/revan-inspiredmodel-f56cb0217d874ae693f17974806b8e20",
    techStack: [
      { name: "Blender", icon: <FaBlender className="text-orange-500 text-xl" /> },
      { name: "Sketchfab", icon: <FaCloud className="text-gray-600 text-xl" /> },
    ],
  },
  {
    name: "Rancid Tomatillos",
    description: "An interactive movie app that allows users to browse posters, vote on movies, and view detailed information using dynamic routes. All data is fetched from an external API. This project was built to practice handling external API data, React Router, conditional rendering, error handling, and front-end testing with Cypress.",
    link: "https://rancid-tomatillos-1-tqkd.onrender.com/",
    techStack: [
      { name: "React", icon: <FaReact className="text-blue-400 text-xl" /> },
      { name: "React Router DOM", icon: <FaReact className="text-purple-500 text-xl" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      { name: "Cypress", icon: <FaCube className="text-green-500 text-xl" /> },
      { name: "Render", icon: <FaCloud className="text-indigo-500 text-xl" /> },
    ],
  },
  {
    name: "Shadow Metal Fest",
    description: "A full-stack app to manage and explore multi-day music festival schedules. View all multi-day festival schedules, dive into each schedule’s lineup and attendee list, filter bands by name, add or delete bands for a specific festival day, automatically format stage names and times, and includes a custom logo with responsive design.",
    link: "https://github.com/shadeauchristensen/ShadowMetalFest-API.git",
    techStack: [
      { name: "React", icon: <FaReact className="text-blue-400 text-xl" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500 text-xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      { name: "Ruby on Rails API", icon: <SiRubyonrails className="text-red-500 text-xl" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-slate-700 text-xl" /> },
      { name: "Faker", icon: <FaTools className="text-slate-400 text-xl" /> },
      { name: "FactoryBot", icon: <FaTools className="text-slate-400 text-xl" /> },
      { name: "RSpec", icon: <FaGem className="text-red-500 text-xl" /> },
    ],
  },
];

export default projects;