import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { loginUser } from "../services/authService";
import {
  successToast,
  errorToast,
} from "../utils/toast";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/student-dashboard");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      successToast("Login Successful");

      setTimeout(() => {
        navigate("/student-dashboard");
      }, 800);

    } catch (error) {
      errorToast(
        error.response?.data?.message ||
          "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 flex justify-center items-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid lg:grid-cols-2">

        {/* Left */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-indigo-700 text-white p-12">

          <h1 className="text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Continue your learning journey with Datawave.
          </p>

          <img
            src="/hero.png"
            alt="Learning"
            className="mt-10"
          />

        </div>

        {/* Right */}

        <div className="p-10 lg:p-14">

          <h2 className="text-4xl font-bold text-center">
            Login
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Sign in to continue learning
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />

            </div>

            <div className="relative">

              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            <p className="text-center">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-blue-600 font-semibold"
              >
                Register
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;