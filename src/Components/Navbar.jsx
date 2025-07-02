import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className={"w-25 h-8 rounded-lg bg-gray-900 items-center justify-center flex font-bold shadow-lg shadow-gray-900/50"}>
            <p className="pink-gradient_text">Shadeau Christensen</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-semibold bg-gradient-to-r from-pink-600 to-blue-700 bg-clip-text text-transparent text-shadow">
            <NavLink to='/about' className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600") + " transition-colors duration-200"}>About</NavLink>
            <NavLink to='/projects' className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600") + " transition-colors duration-200"}>Projects</NavLink>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600") + " transition-colors duration-200"}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar