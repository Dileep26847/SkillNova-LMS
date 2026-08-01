import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function AdminTopbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white rounded-2xl shadow-lg px-8 py-5 flex justify-between items-center">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back, {user?.full_name || "Admin"}
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Search */}

        <div className="relative hidden lg:block">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="border rounded-xl py-3 pl-12 pr-4 w-72 outline-none focus:ring-2 focus:ring-blue-600"
          />

        </div>

        {/* Notification */}

        <button className="relative bg-slate-100 hover:bg-slate-200 p-4 rounded-xl transition">

          <FaBell size={20} />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <FaUserCircle
            size={42}
            className="text-blue-600"
          />

          <div className="hidden md:block">

            <h3 className="font-bold">
              {user?.full_name || "Admin"}
            </h3>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminTopbar;