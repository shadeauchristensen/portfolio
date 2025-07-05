import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { arrow } from "../assets/icons";
// import "../index.css";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box font-medium text-center">
    <p className="mb-4 text-base sm:text-sm ">{text}</p>
    {link && btnText && (
      <Link
        to={link}
        className="btn transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {btnText}
      </Link>
    )}
  </div>
)

const renderContent = {
  1: (
    <InfoBox 
      text= {<>
        <br />
            Hey there! I’m Shadeau! Once a restaurant manager, now a full-stack developer and 3D creator with a love for crafting eye-catching, user-friendly digital worlds and experiences.
        <br />
            𝗞𝗲𝗲𝗽 𝘀𝗰𝗿𝗼𝗹𝗹𝗶𝗻𝗴 𝘰𝘳 𝘁𝗮𝗽 𝘁𝗵𝗼𝘀𝗲 𝗮𝗿𝗿𝗼𝘄 𝗸𝗲𝘆𝘀 𝘵𝘰 𝘥𝘪𝘴𝘤𝘰𝘷𝘦𝘳 𝘮𝘰𝘳𝘦!
      </>}
      link="/about"
      btnText="About Me"
    />
  ),
  2: (
    <InfoBox 
      text= { <>
      <br />
      Wondering what kind of magic I can whip up? I’ve got a knack for tackling tough problems, leading high-stress teams with a smile, and turning big ideas into dazzling full-stack creations.
      <br />
        𝘚𝘵𝘪𝘭𝘭 𝘸𝘪𝘵𝘩 𝘮𝘦? 𝘈𝘸𝘦𝘴𝘰𝘮𝘦! 𝘊𝘩𝘦𝘤𝘬 𝘰𝘶𝘵 𝘮𝘺 𝘱𝘰𝘳𝘵𝘧𝘰𝘭𝘪𝘰 𝘵𝘰 𝘴𝘦𝘦 𝘴𝘰𝘮𝘦 𝘰𝘧 𝘵𝘩𝘦 𝘤𝘰𝘰𝘭 𝘴𝘵𝘶𝘧𝘧 𝘐’𝘷𝘦 𝘣𝘶𝘪𝘭𝘵! 𝘖𝘳 𝘬𝘦𝘦𝘱 𝘣𝘶𝘻𝘻𝘪𝘯𝘨 𝘰𝘷𝘦𝘳 𝘵𝘰 𝘵𝘩𝘦 𝘣𝘢𝘬𝘦𝘳𝘺 𝘵𝘰 𝘧𝘪𝘯𝘥 𝘰𝘶𝘵 𝘩𝘰𝘸 𝘸𝘦 𝘤𝘢𝘯 𝘵𝘶𝘳𝘯 𝘺𝘰𝘶𝘳 𝘯𝘦𝘹𝘵 𝘱𝘳𝘰𝘫𝘦𝘤𝘵 𝘪𝘯𝘵𝘰 𝘢 𝘴𝘸𝘦𝘦𝘵 𝘳𝘦𝘢𝘭𝘪𝘵𝘺!
      </>}
      link="/projects"
      btnText="My Projects"
    />
  ),
  3: (
    <InfoBox 
      text={
        <>
          <br />
          Ready to make something awesome together? I thrive on curiosity, creativity, and teaming up to turn wild ideas into real experiences. If you’re after someone who brings big energy and a fresh perspective, let’s chat!
          <br />
          <span className="text-lg font-semibold">
            Follow me and let’s connect and explore the possibilities!
          </span>
          <span className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/shadeauchristensen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-900 hover:text-pink-500 text-3xl transform transition-transform duration-300 hover:scale-110"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shadeauchristensen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-pink-500 text-3xl transform transition-transform duration-300 hover:scale-110"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </span>
        </>
      }
      link="/contact"
      btnText="Contact Me"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo