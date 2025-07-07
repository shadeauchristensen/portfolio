import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');                   // First, navigate to home route
    setTimeout(() => window.location.reload(), 0);  // Then force reload
  };
  
  return (
    <header className="w-full fixed left-0 top-0 bg-gradient-to-t from-blue-400 to-pink-700 py-2 px-4 flex flex-wrap md:flex-nowrap items-center justify-between shadow-lg z-50">
      <NavLink
        to="/"
        onClick={(event) => {
          event.preventDefault(); //Fixed the issue of bug not loading the home page properly // This prevents the default link behavior
          handleHomeClick(); // This makes it so every time you click your home link, the page fully reload
          setIsMobileMenuOpen(false);
        }}
        className="w-fit bg-transparent text-lg px-2 py-1 hover:animate-bounce hover:scale-105 hover:shadow-lg transition-colors duration-200 hover:bg-blue-400 hover:text-white flex items-center gap-2"
      >
        <p className="text-white font-bold">Home</p>
      </NavLink>
      <button
        className="text-white text-3xl md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <nav className={`w-full md:w-auto ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row text-lg gap-4 font-semibold`}>
        <NavLink
          to='/about'
          onClick={() => setIsMobileMenuOpen(false)}
          className={({ isActive }) => (isActive ? "text-white" : "text-white hover:text-blue-400") + " transition-colors duration-200  hover:bg-blue-400 hover:text-white flex px-6 py-3 items-center gap-2 hover:animate-bounce hover:scale-110 hover:shadow-lg"}
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          onClick={() => setIsMobileMenuOpen(false)}
          className={({ isActive }) => (isActive ? "text-white" : "text-white hover:text-blue-400") + " transition-colors duration-200  hover:bg-blue-400 hover:text-white flex px-6 py-3 items-center gap-2 hover:animate-bounce hover:scale-110 hover:shadow-lg"}
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          onClick={() => setIsMobileMenuOpen(false)}
          className={({ isActive }) => (isActive ? "text-white" : "text-white hover:text-blue-400") + " transition-colors duration-200  hover:bg-blue-400 hover:text-white flex px-6 py-3 items-center gap-2 hover:animate-bounce hover:scale-110 hover:shadow-lg"}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar