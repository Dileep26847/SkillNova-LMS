import {
  FaTachometerAlt,
  FaUsers,
  FaBook,
  FaVideo,
  FaSignOutAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuClass = ({ isActive }) =>
    `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <aside className="w-72 bg-white shadow-xl min-h-screen flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b">

        <div className="flex items-center gap-3">

          <div className="bg-blue-600 text-white p-3 rounded-xl">

            <FaGraduationCap size={22} />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-blue-600">
              SkillNova
            </h1>

            <p className="text-sm text-gray-500">
              Admin Panel
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-6 space-y-3">

        <NavLink
          to="/admin-dashboard"
          className={menuClass}
        >
          <FaTachometerAlt />
          Dashboard
        </NavLink>

        <NavLink
          to="/manage-students"
          className={menuClass}
        >
          <FaUsers />
          Students
        </NavLink>

        <NavLink
          to="/manage-courses"
          className={menuClass}
        >
          <FaBook />
          Courses
        </NavLink>

        <NavLink
          to="/manage-lessons"
          className={menuClass}
        >
          <FaVideo />
          Lessons
        </NavLink>

      </nav>

      {/* Logout */}

      <div className="p-6 border-t">

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex justify-center items-center gap-3 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;