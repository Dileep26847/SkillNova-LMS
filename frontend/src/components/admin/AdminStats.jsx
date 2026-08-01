import { useEffect, useState } from "react";
import {
  FaUsers,
  FaBookOpen,
  FaVideo,
  FaUserGraduate,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { getDashboardStats } from "../../services/adminService";

function AdminStats() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCourses: 0,
    totalLessons: 0,
    totalEnrollments: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getDashboardStats();

      setStats(data.stats);

    } catch (error) {
      console.log(error);
    }
  };

  const cards = [
    {
      title: "Students",
      value: stats.totalStudents,
      icon: <FaUsers size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Courses",
      value: stats.totalCourses,
      icon: <FaBookOpen size={28} />,
      color: "bg-green-600",
    },
    {
      title: "Lessons",
      value: stats.totalLessons,
      icon: <FaVideo size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "Enrollments",
      value: stats.totalEnrollments,
      icon: <FaUserGraduate size={28} />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
          }}
          className="bg-white rounded-3xl shadow-lg p-6"
        >

          <div
            className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
          >
            {card.icon}
          </div>

          <h3 className="mt-5 text-gray-500">
            {card.title}
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {card.value}
          </h1>

        </motion.div>

      ))}

    </div>
  );
}

export default AdminStats;