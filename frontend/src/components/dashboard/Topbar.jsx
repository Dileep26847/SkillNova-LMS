import {
  FaBell,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";

function Topbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-3xl shadow-lg px-8 py-6 flex flex-col lg:flex-row justify-between items-center gap-6">

      {/* Left */}

      <div>

        <h2 className="text-4xl font-bold text-gray-800">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 mt-2">
          {user?.full_name}
        </p>

        <div className="flex items-center gap-2 mt-4 text-gray-500">

          <FaCalendarAlt className="text-blue-600" />

          <span>{today}</span>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <div className="relative">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-100 rounded-xl py-3 pl-12 pr-4 outline-none w-72"
          />

        </div>

        <button className="relative bg-slate-100 p-4 rounded-xl hover:bg-slate-200 transition">

          <FaBell size={18} />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center">
            3
          </span>

        </button>

        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            user?.full_name || "Student"
          )}&background=2563eb&color=fff&size=128`}
          alt="Profile"
          className="w-14 h-14 rounded-full border-4 border-blue-100"
        />

      </div>

    </div>
  );
}
export default Topbar;