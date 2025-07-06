import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { arrow } from "../assets/icons";
// import "../index.css";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box font-medium text-center max-w-[500px] mx-auto p-4 sm:p-3">
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
    text={
      <>
        <br />
        Hey there! I’m Shadeau! Once a restaurant manager, now a full-stack developer and 3D creator with a love for crafting eye-catching, user-friendly digital worlds and experiences.
        <br />
        <span className="italic">
          Use your <span className="font-bold">mouse</span> or <span className="font-bold">tap those arrow keys</span> to fly the bee around this 3D island and learn more!
        </span>
      </>
    }
    link="/about"
    btnText="About Me"
  />
),
  2: (
    <InfoBox 
      text={
        <>
          <br />
          Wondering what kind of magic I can whip up? I’ve got a knack for tackling tough problems, leading high-stress teams with a smile, and turning big ideas into dazzling full-stack creations.
          <br />
          <span className="italic">
            Still with me? Awesome! Check out my <span className="font-semibold">portfolio</span> to see some of the cool stuff I’ve built!
          </span>{" "}
          Or keep <span className="font-semibold italic">buzzing over to the bakery</span> to find out how we can turn your next project into a sweet reality!
        </>
      }
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
          <span className="text-lg font-bold">
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