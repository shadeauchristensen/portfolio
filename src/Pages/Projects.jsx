import React from 'react'

import projects from '../Data/projects.jsx'
// Importing the project data from the projects file

const Projects = () => {
  return (
        <section className="max-container mx-auto px-2 py-6">
      <h1 className="head-text">
      <span className="pink-gradient_text font-semibold drop-shadow-md">Curious about what I've created?</span></h1>

      <div className="px-2 py-5 md:px-4 lg:px-8 text-slate-500 dark:text-slate-800">
        <p>
          Here are some of the projects I've worked on. Each project showcases my skills in web development, design, and problem-solving. Feel free to explore them to see how I approach challenges and create solutions.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
        {projects.map((project) => (
          <div key={project.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-yellow-20 transition-transform duration-300 mb-8">
            <h3 className="text-xl font-bold mb-3">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {project.name}
              </a>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-500 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech) => (
                <span key={tech.name} className="flex items-center gap-1 text-sm">
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects