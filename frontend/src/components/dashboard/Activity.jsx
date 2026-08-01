import {
  FaCheckCircle,
  FaBookOpen,
  FaDownload,
  FaCertificate,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Activity() {
  const activities = [
    {
      icon: <FaCheckCircle />,
      color: "bg-green-100 text-green-600",
      title: "Completed Lesson 8",
      subtitle: "MERN Stack Development",
      time: "10 mins ago",
    },
    {
      icon: <FaBookOpen />,
      color: "bg-blue-100 text-blue-600",
      title: "Enrolled in React Course",
      subtitle: "React.js Masterclass",
      time: "Today",
    },
    {
      icon: <FaDownload />,
      color: "bg-orange-100 text-orange-600",
      title: "Downloaded Notes",
      subtitle: "JavaScript Essentials",
      time: "Yesterday",
    },
    {
      icon: <FaCertificate />,
      color: "bg-purple-100 text-purple-600",
      title: "Achievement Unlocked",
      subtitle: "Completed 5 Lessons",
      time: "2 Days Ago",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

        <span className="text-blue-600 text-sm font-semibold cursor-pointer">
          View All
        </span>

      </div>

      <div className="space-y-6">

        {activities.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className="flex items-start gap-4 border-b pb-5 last:border-none"
          >

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${item.color}`}
            >
              {item.icon}
            </div>

            <div className="flex-1">

              <h3 className="font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {item.subtitle}
              </p>

              <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">

                <FaClock />

                <span>{item.time}</span>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Activity;