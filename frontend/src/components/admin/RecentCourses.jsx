function RecentCourses() {

  const courses = [
    "React Development",
    "Node.js Backend",
    "Python Programming",
    "UI/UX Design",
  ];

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Courses
      </h2>

      <div className="space-y-4">

        {courses.map((course, index) => (

          <div
            key={index}
            className="border rounded-xl p-4 hover:bg-blue-50"
          >
            {course}
          </div>

        ))}

      </div>

    </div>

  );
}

export default RecentCourses;