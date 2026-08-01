import { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaClock,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { getDashboardStats } from "../../services/dashboardService";

function StatsCards() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    totalCourses: 0,
    totalLessons: 0,
    completedLessons: 0,
    learningHours: 0,
  });

  useEffect(() => {
    if (user?.id) {
      fetchDashboardStats();
    }
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const data = await getDashboardStats(user.id);

      setStats(data.stats);
    } catch (error) {
      console.error(error);
    }
  };

  const progress =
    stats.totalLessons > 0
      ? Math.round(
          (stats.completedLessons /
            stats.totalLessons) *
            100
        )
      : 0;

  const cards = [
    {
      title: "My Courses",
      value: stats.totalCourses,
      icon: <FaBookOpen size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Learning Hours",
      value: stats.learningHours,
      icon: <FaClock size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "Completed Lessons",
      value: stats.completedLessons,
      icon: <FaCheckCircle size={28} />,
      color: "bg-green-600",
    },
    {
      title: "Progress",
      value: `${progress}%`,
      icon: <FaChartLine size={28} />,
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

export default StatsCards;