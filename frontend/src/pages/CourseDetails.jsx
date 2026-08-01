import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaUserGraduate,
  FaClock,
  FaCertificate,
  FaPlayCircle,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { getCourseById } from "../services/courseService";
import { enrollCourse } from "../services/enrollmentService";

import {
  successToast,
  errorToast,
} from "../utils/toast";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      const data = await getCourseById(id);
      setCourse(data.course);
    } catch (error) {
      errorToast("Unable to load course.");
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      errorToast("Please login first.");
      navigate("/login");
      return;
    }

    try {
      setEnrolling(true);

      const data = await enrollCourse(
        user.id,
        course.id
      );

      successToast(data.message);

      setTimeout(() => {
        navigate("/my-courses");
      }, 1000);

    } catch (error) {
      errorToast(
        error.response?.data?.message ||
        "Enrollment Failed"
      );
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">

        <div className="text-center">

          <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-600 mx-auto"></div>

          <h2 className="mt-6 text-2xl font-bold">
            Loading Course...
          </h2>

        </div>

      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center">

        <h2 className="text-4xl font-bold">
          Course Not Found
        </h2>

      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">

        <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 mb-8 hover:text-yellow-300 transition"
            >
              <FaArrowLeft />

              Back
            </button>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">

              Bestseller Course

            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">

              {course.title}

            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-8">

              {course.description}

            </p>

            <div className="flex flex-wrap gap-8 mt-8">

              <div className="flex items-center gap-2">

                <FaStar className="text-yellow-300" />

                <span>4.9 Rating</span>

              </div>

              <div className="flex items-center gap-2">

                <FaUserGraduate />

                <span>12,000 Students</span>

              </div>

              <div className="flex items-center gap-2">

                <FaClock />

                <span>40 Hours</span>

              </div>

            </div>
                        <div className="mt-10">

              <p className="text-lg text-blue-200">
                Instructor
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {course.instructor}
              </h3>

            </div>

            <div className="mt-10">

              <h2 className="text-5xl font-extrabold">

                ₹{course.price}

              </h2>

            </div>

            <button
              onClick={handleEnroll}
              disabled={enrolling}
              className="mt-10 bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition shadow-lg"
            >

              {enrolling
                ? "Enrolling..."
                : "Enroll Now"}

            </button>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <img
              src={course.thumbnail}
              alt={course.title}
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </motion.div>

        </div>

      </div>

      {/* Body */}

      <div className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-3 gap-10">

        {/* Left */}

        <div className="lg:col-span-2 space-y-8">

          {/* Learn */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">

              What You'll Learn

            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600" />

                Build Real Projects

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600" />

                Industry Ready Skills

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600" />

                Modern Development

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600" />

                Portfolio Building

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600" />

                Interview Preparation

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600" />

                Lifetime Access

              </div>

            </div>

          </div>

          {/* Description */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">

              Course Description

            </h2>

            <p className="text-gray-600 leading-8">

              {course.description}

            </p>

          </div>

        </div>

        {/* Sidebar */}

        <div>

          <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-10">

            <h2 className="text-3xl font-bold mb-8">

              This Course Includes

            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <FaPlayCircle className="text-blue-600" />

                <span>40 Hours HD Video</span>

              </div>

              <div className="flex items-center gap-4">

                <FaCertificate className="text-blue-600" />

                <span>Certificate of Completion</span>

              </div>

              <div className="flex items-center gap-4">

                <FaClock className="text-blue-600" />

                <span>Lifetime Access</span>

              </div>

              <div className="flex items-center gap-4">

                <FaUserGraduate className="text-blue-600" />

                <span>Community Support</span>

              </div>
                          </div>

            <button
              onClick={handleEnroll}
              disabled={enrolling}
              className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition duration-300"
            >
              {enrolling
                ? "Enrolling..."
                : "Enroll Now"}
            </button>

            <div className="mt-8 border-t pt-6">

              <div className="flex justify-between mb-4">

                <span className="text-gray-500">
                  Level
                </span>

                <span className="font-semibold">
                  Beginner to Advanced
                </span>

              </div>

              <div className="flex justify-between mb-4">

                <span className="text-gray-500">
                  Language
                </span>

                <span className="font-semibold">
                  English
                </span>

              </div>

              <div className="flex justify-between mb-4">

                <span className="text-gray-500">
                  Students
                </span>

                <span className="font-semibold">
                  12,000+
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Certificate
                </span>

                <span className="font-semibold text-green-600">
                  Included
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;