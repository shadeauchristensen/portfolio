import { FaCube, FaDatabase, FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGithubAlt, FaBlender, FaGem, FaTools } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiVite, SiCypress, SiRender, SiUnrealengine, SiJson, SiRuby, SiTypescript, SiMarkdown, SiHostinger, SiHeroku, SiRubyonrails, SiNotion, SiThreedotjs } from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";
import { RiDatabaseFill } from "react-icons/ri";

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "React", icon: <FaReact className="text-blue-400 text-xl" /> },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-yellow-400 text-xl" /> },
      { name: "Rails", icon: <SiRubyonrails className="text-red-500 text-xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-xl" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      { name: "Ruby", icon: <SiRuby className="text-red-500 text-xl" /> },
    ],
  },
  {
    category: "Testing & Tools",
    items: [
      { name: "RSpec", icon: <FaGem className="text-red-500 text-xl" /> }, 
      { name: "GitHub", icon: <FaGithubAlt className="text-black text-xl" /> },
      { name: "FactoryBot", icon: <FaTools className="text-gray-500 text-xl" /> }, 
      { name: "Cypress", icon: <SiCypress className="text-green-500 text-xl" /> },
      { name: "Faker", icon: <FaTools className="text-slate-400 text-xl" /> },
    ],
  },
  {
    category: "Build & Deployment",
    items: [
      { name: "Vite", icon: <SiVite className="text-blue-600 text-xl" /> },
      { name: "Render", icon: <SiRender className="text-black-500 text-xl" /> },
      { name: "Hostinger", icon: <SiHostinger className="text-purple-300 text-xl" /> },
      { name: "Heroku", icon: <SiHeroku className="text-indigo-500 text-xl" /> },
    ],
  },
  {
    category: "APIs & Data",
    items: [
      { name: "RESTful APIs", icon: <RiDatabaseFill className="text-gray-400 text-xl" /> },
      { name: "Third-Party API Integration", icon: <TbPlugConnected className="text-blue-400 text-xl" /> },
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
    category: "3D Modeling & Animation",
    items: [
      { name: "Unreal Engine", icon: <SiUnrealengine className="text-gray-800 text-xl" /> },
      { name: "Blender", icon: <FaBlender className="text-orange-500 text-xl" /> },
      { name: "React Three Fiber", icon: <SiThreedotjs className="text-blue-800 text-xl" /> },
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
    category: "Documentation & Planning",
    items: [
      { name: "GitHub Projects", icon: <FaGithubAlt className="text-black-600 text-xl" /> },
      { name: "Markdown", icon: <SiMarkdown className="text-yellow-400 text-xl" /> },
      { name: "Notion", icon: <SiNotion className="text-slate-600 text-xl" /> },
    ],
  },
];

export default skills;
