import { NavLink } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg">
            <FaGraduationCap size={20} />
          </div>

          <h1 className="text-2xl font-bold tracking-wide text-gray-800">
            SkillNova
          </h1>

        </div>

        {/* Center Navigation */}

        <nav className="hidden md:flex items-center gap-10">

          <NavLink
            to="/"
            className="font-medium text-gray-600 hover:text-blue-600 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className="font-medium text-gray-600 hover:text-blue-600 transition"
          >
            Courses
          </NavLink>

          <NavLink
            to="/about"
            className="font-medium text-gray-600 hover:text-blue-600 transition"
          >
            About
          </NavLink>

        </nav>

        {/* Right Buttons */}

        <div className="flex items-center gap-4">

          <NavLink
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Get Started
          </NavLink>

        </div>

      </div>
    </header>
  );
}

export default Navbar;