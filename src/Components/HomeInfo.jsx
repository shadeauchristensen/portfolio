import { Link } from "react-router-dom";

// import { arrow } from "../assets/icons";
// import "../index.css";

const renderContent = {
    1: (
    <h1 className='sm:text-xl sm:leading-snug font-bold text-center neo-brutalism-theme py-4 px-8 text-white mx-5'>
        Hello! My name is Shadeau. I am a former restaurant manager turned full-stack developer and 3D creator with a passion for building visually engaging, user-focused digital experiences
    </h1>),
    2: (
    <h1 className='sm:text-xl sm:leading-snug font-bold text-center neo-brutalism-theme py-4 px-8 text-white mx-5'>
         I bring a strong foundation in collaborative problem-solving, high-pressure team leadership, and clear communication. Skilled in full-stack application development, cinematic 3D scene building, and creative technical workflows using tools like React, Ruby on Rails, Blender, and Unreal Engine 5.
    </h1>),
    3: (
    <h1 className='sm:text-xl sm:leading-snug font-bold text-center neo-brutalism-theme py-4 px-8 text-white mx-5'>
        Known for my adaptability, creativity, and team-first mindset, I thrive in environments where curiosity, iteration, and purpose-driven work come together to make meaningful impact. Sound like a fit? Let's connect! follow me on LinkedIn or Github to see my latest projects and insights.
    </h1>),
}

const infoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p>{text}</p>
    <a href={link} className="btn">
      {btnText}
    </a>
  </div>
)

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo