import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className={"w-25 h-8 rounded-lg bg-gray-800 items-center justify-center flex font-bold shadow-lg shadow-gray-500/50"}>
            <p className="pink-gradient_text">Shadeau Christensen</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-semibold">
            <NavLink to='/about' className={({ isActive }) => (isActive ? "text-pink-500" : "hover:text-pink-500") + " transition-colors duration-200"}>About</NavLink>
            <NavLink to='/projects' className={({ isActive }) => (isActive ? "text-pink-500" : "hover:text-pink-500") + " transition-colors duration-200"}>Projects</NavLink>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? "text-pink-500" : "hover:text-pink-500") + " transition-colors duration-200"}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar