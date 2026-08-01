import {
  FaHome,
  FaBook,
  FaGraduationCap,
  FaUser,
  FaCog,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menu = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/student-dashboard",
    },
    {
      title: "Courses",
      icon: <FaBook />,
      path: "/courses",
    },
    {
      title: "My Courses",
      icon: <FaGraduationCap />,
      path: "/my-courses",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      title: "Analytics",
      icon: <FaChartLine />,
      path: "/student-dashboard",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <aside className="w-72 bg-white shadow-2xl border-r min-h-screen flex flex-col justify-between">

      <div>

        {/* Logo */}

        <div className="p-8 border-b">

          <h1 className="text-3xl font-extrabold text-blue-600">
            SkillNova
          </h1>

          <p className="text-gray-500 mt-2">
            Student Dashboard
          </p>

        </div>

        {/* User */}

        <div className="p-6 text-center">

          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user?.full_name || "Student"
            )}&background=2563eb&color=fff&size=200`}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto shadow-lg"
          />

          <h2 className="text-xl font-bold mt-4">
            {user?.full_name}
          </h2>

          <p className="text-gray-500 capitalize">
            {user?.role}
          </p>

        </div>

        {/* Navigation */}

        <nav className="px-5 space-y-2">

          {menu.map((item) => (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              <span className="text-xl">
                {item.icon}
              </span>

              <span className="font-semibold">
                {item.title}
              </span>

            </NavLink>

          ))}

        </nav>

      </div>

      {/* Logout */}

      <div className="p-6">

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold"
        >
          <FaSignOutAlt />

          Logout

        </motion.button>

      </div>

    </aside>
  );
}

export default Sidebar;