import { useEffect, useState } from "react";
import { getMyCourses } from "../services/enrollmentService";
import { FaPlayCircle, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

function MyCourses() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await getMyCourses(user.id);
      setCourses(data.enrollments);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Loading My Courses...
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex items-center gap-3 mb-10">

          <FaBookOpen className="text-blue-600 text-3xl" />

          <h1 className="text-4xl font-bold">
            My Learning
          </h1>

        </div>

        {courses.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

            <h2 className="text-3xl font-bold">
              No Courses Enrolled
            </h2>

            <p className="text-gray-500 mt-4">
              Start learning by enrolling in a course.
            </p>

            <Link
              to="/courses"
              className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl"
            >
              Browse Courses
            </Link>

          </div>

        ) : (

          <div className="grid lg:grid-cols-2 gap-8">

            {courses.map((course) => (

              <div
                key={course.course_id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >

                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-8">

                  <h2 className="text-2xl font-bold">

                    {course.title}

                  </h2>

                  <p className="mt-3 text-gray-500">

                    {course.description}

                  </p>

                  <div className="mt-8">

                    <div className="flex justify-between mb-2">

                      <span>Progress</span>

                      <span>40%</span>

                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">

                      <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: "40%" }}
                      ></div>

                    </div>

                  </div>

                  <button
                    className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl flex justify-center items-center gap-3"
                  >

                    <FaPlayCircle />

                    Continue Learning

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default MyCourses;