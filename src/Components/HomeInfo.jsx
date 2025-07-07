import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { arrow } from "../assets/icons";
// import "../index.css";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box font-medium text-center 
    w-[90%] sm:max-w-[600px] mx-auto 
    px-4 py-3 sm:p-6 
    bg-white/80 rounded-xl shadow-md max-h-[90vh] overflow-y-auto"
  >
    <p className="mb-3 text-sm sm:text-base leading-snug">
      {text}
    </p>
    {link && btnText && (
      <Link
        to={link}
        className="btn mt-2 text-sm sm:text-base px-4 py-2 
    transform transition-transform duration-300 
    hover:scale-105 hover:shadow-lg"
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
        <br />
        <span className="font-semibold italic">
          Use the left click on your <span className="font-bold">mouse and drag or use your finger if you're on a touch device</span> or <span className="font-bold">tap those arrow keys</span> on your keyboard to fly the bee around this 3D island and learn more!
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