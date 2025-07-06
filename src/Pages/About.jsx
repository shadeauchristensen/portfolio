import React from 'react'

import skills from '../Data/skills.jsx'

const About = () => {
  return (
    <section className="max-container mx-auto px-2 py-6">
      <h1 className="head-text">
      Hello, I'm <span className="pink-gradient_text font-semibold drop-shadow-md">Shadeau Christensen</span>,<br /> a full-stack developer and 3D creator.</h1>

      <div className="mt-8 text-slate-400 dark:text-slate-800">
        <p>
          I specialize in building dynamic full-stack web applications and creating immersive 3D models and experiences. With a passion for both front-end and back-end development, I enjoy crafting solutions that are not only functional but also visually appealing.
        </p>
      </div>

      <div className='py-6 flex flex-col'>
        <h2 className="subhead-text">My Skills</h2>
        <ul className="py-8 list-disc list-inside mt-2">
          <li>Full-Stack Development</li>
          <li>3D Modeling and Animation</li>
          <li>Responsive Web Design</li>
          <li>API Development</li>
        </ul>
        <div>
          <p className='subhead-text py-10'>
            I am proficient in a wide range of technologies and tools, including:
          </p>
          <div className="py-20 space-y-12">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="subhead-text mb-2 text-center">{group.category}</h3>
                <p className="text-sm mb-4 text-slate-500 dark:text-slate-400">{group.description}</p>

                <div className="flex flex-wrap gap-6 justify-center">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center w-24">
                      <div className="bg-slate-100 rounded-xl p-4 shadow-md cursor-pointer transform hover:scale-110 transition duration-300 flex justify-center items-center w-20 h-20">
                        {skill.icon}
                      </div>
                      <span className="text-xs mt-2 text-center dark:text-gray-500">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About