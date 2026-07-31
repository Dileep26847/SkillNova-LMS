import {
  FaStar,
  FaUserGraduate,
  FaClock,
} from "react-icons/fa";

function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "John Smith",
      students: "2,450",
      duration: "12 Weeks",
      rating: "4.9",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      instructor: "Sarah Johnson",
      students: "1,800",
      duration: "10 Weeks",
      rating: "4.8",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
    },
    {
      id: 3,
      title: "UI / UX Design Masterclass",
      instructor: "David Lee",
      students: "3,100",
      duration: "8 Weeks",
      rating: "5.0",
      price: "₹899",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Courses
          </h2>

          <p className="mt-4 text-gray-500">
            Start learning with our most popular courses.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {courses.map((course) => (

            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {course.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {course.instructor}
                </p>

                <div className="flex justify-between mt-6 text-gray-600">

                  <span className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {course.rating}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaUserGraduate />
                    {course.students}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaClock />
                    {course.duration}
                  </span>

                </div>

                <div className="flex justify-between items-center mt-8">

                  <h2 className="text-3xl font-bold text-blue-600">
                    {course.price}
                  </h2>

                  <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl">

                    Enroll

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedCourses;