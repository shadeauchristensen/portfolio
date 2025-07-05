import React from 'react'

const About = () => {
  return (
    <section className="max-container mx-auto px-2 py-6">
      <h1 className="head-text">About
      Hello, I'm <span className="pink-gradient_text font-semibold drop-shadow-md">Shadeau Christensen</span>, a full-stack developer and 3D creator.</h1>

      <div className="mt-8 text-gray-400 dark:text-gray-800">
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
          <p className='subhead-text'>
            I am proficient in a wide range of technologies and tools, including:
          </p>
          <ul className="py-8 list-disc list-inside mt-2">
            <li>Languages & Frameworks: JavaScript (ES6+), Ruby, HTML5, CSS3, React, Rails</li>
            <li>Databases & ORMs: PostgreSQL, SQL, ActiveRecord</li>
            <li>APIs & Data: RESTful APIs, JSON, third-party API integration</li>
            <li>Testing & Tools: RSpec, Cypress, FactoryBot, Git, Postman, Render, Vite</li>
            <li>3D Modeling & Animation: Blender, Unreal Engine, React Three Fiber, Drei, GLTF workflows</li>
            <li>UI & Design: Tailwind CSS, responsive design, interactive animations</li>
            <li>Build & Deployment: Vite, Render, Netlify</li>
            <li>Documentation & Planning: Markdown, GitHub Projects, professional README authoring</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About