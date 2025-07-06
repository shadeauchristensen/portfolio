import { FaCube, FaDatabase, FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGithubAlt, FaBlender, FaGem, FaTools, FaServer, FaCloud } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiVite, SiCypress, SiRender, SiUnrealengine, SiJson, SiRuby, SiTypescript, SiMarkdown } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "React", icon: <FaReact className="text-blue-400 text-xl" /> },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-yellow-400 text-xl" /> },
      { name: "Rails", icon: <FaGem className="text-red-500 text-xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-xl" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      { name: "Ruby", icon: <SiRuby className="text-red-500 text-xl" /> },
    ],
  },
{
  category: "Testing & Tools",
  items: [
    { name: "Vite", icon: <SiVite className="text-purple-400 text-xl" /> },
    { name: "RSpec", icon: <FaGem className="text-red-500 text-xl" /> }, 
    { name: "Render", icon: <SiRender className="text-black-500 text-xl" /> },
    { name: "GitHub", icon: <FaGithubAlt className="text-black text-xl" /> },
    { name: "FactoryBot", icon: <FaTools className="text-gray-500 text-xl" /> }, 
    { name: "Cypress", icon: <SiCypress className="text-green-500 text-xl" /> },
    { name: "Faker", icon: <FaTools className="text-slate-400 text-xl" /> },
  ],
},
  {
    category: "3D Modeling & Animation",
    items: [
      { name: "Unreal Engine", icon: <SiUnrealengine className="text-gray-800 text-xl" /> },
      { name: "Blender", icon: <FaBlender className="text-orange-500 text-xl" /> },
      { name: "React Three Fiber", icon: <FaReact className="text-blue-400 text-xl" /> },
    ],
  },
  {
    category: "Databases & ORMs",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800 text-xl" /> },
      { name: "SQL", icon: <FaDatabase className="text-gray-600 text-xl" /> },
      { name: "ActiveRecord", icon: <SiRuby className="text-red-500 text-xl" /> },
    ],
  },
  {
    category: "APIs & Data",
    items: [
      { name: "RESTful APIs", icon: <TbBrandReactNative className="text-blue-400 text-xl" /> },
      { name: "Third-Party API Integration", icon: <TbBrandReactNative className="text-blue-400 text-xl" /> },
      { name: "JSON", icon: <SiJson className="text-yellow-500 text-xl" /> },
    ],
  },
  {
    category: "UI & Design",
    items: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-xl" /> },
      { name: "Responsive Design", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      { name: "Interactive Animations", icon: <FaReact className="text-blue-400 text-xl" /> },
    ],
  },
  {
    category: "Build & Deployment",
    items: [
      { name: "Vite", icon: <SiVite className="text-purple-400 text-xl" /> },
      { name: "Render", icon: <SiRender className="text-black-500 text-xl" /> },
      { name: "Hostinger", icon: <FaServer className="text-purple-300 text-xl" /> },
      { name: "Heroku", icon: <FaCloud className="text-indigo-500 text-xl" /> },
    ],
  },
  {
    category: "Documentation & Planning",
    items: [
      { name: "Markdown", icon: <SiMarkdown className="text-yellow-400 text-xl" /> },
      { name: "GitHub Projects", icon: <FaGithubAlt className="text-black-600 text-xl" /> },
      { name: "Notion", icon: <FaCube className="text-slate-600 text-xl" /> },
    ],
  },
];

export default skills;
