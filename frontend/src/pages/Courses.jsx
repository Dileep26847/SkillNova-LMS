import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CourseCard from "../components/CourseCard";
import {
  getAllCourses,
  searchCourses,
} from "../services/courseService";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        fetchCourses();
      } else {
        handleSearch();
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const fetchCourses = async () => {
    try {
      const data = await getAllCourses();
      setCourses(data.courses);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleSearch = async () => {
    try {
      const data = await searchCourses(search);
      setCourses(data.courses);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        Loading Courses...
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 py-20">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold text-white">
            Explore Our Courses
          </h1>

          <p className="text-blue-100 mt-5 text-lg">
            Learn from industry experts and build your future.
          </p>

          <div className="max-w-xl mx-auto mt-10 relative">

            <FaSearch className="absolute left-5 top-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search by title, instructor or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-4 pl-14 pr-5 rounded-2xl shadow-xl outline-none text-lg"
            />

          </div>

        </div>

      </div>

      {/* Courses */}

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-bold">
            Available Courses
          </h2>

          <span className="bg-blue-600 text-white px-5 py-2 rounded-full">
            {courses.length} Courses
          </span>

        </div>

        {courses.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg py-20 text-center">

            <h2 className="text-3xl font-bold">
              No Courses Found
            </h2>

            <p className="text-gray-500 mt-4">
              Try another keyword.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Courses;