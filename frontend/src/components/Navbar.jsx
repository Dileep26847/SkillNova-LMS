import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-blue-600 text-white p-3 rounded-xl">
            <FaGraduationCap size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-blue-600">
             DataWave
            </h1>

            <p className="text-xs text-gray-500">
              Learn Without Limits
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={navClass}
          >
            Courses
          </NavLink>

          {token && (
            <>
              <NavLink
                to="/student-dashboard"
                className={navClass}
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/my-courses"
                className={navClass}
              >
                My Courses
              </NavLink>

              <NavLink
                to="/admin-dashboard"
                className={navClass}
              >
                Admin
              </NavLink>
            </>
          )}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {token ? (
            <>
              <div className="hidden lg:flex items-center gap-3">

                <img
                  src={`https://ui-avatars.com/api/?name=${
                    user?.full_name || "User"
                  }&background=2563eb&color=fff`}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />

                <div>

                  <h3 className="font-semibold text-sm">
                    {user?.full_name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {user?.role || "Student"}
                  </p>

                </div>

              </div>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-blue-600 font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>

    </header>
  );
}

export default Navbar;