import { FaPlayCircle, FaClock, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function ContinueLearning() {
  const progress = 40;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl shadow-xl text-white overflow-hidden"
    >
      <div className="p-10">

        <div className="flex justify-between items-center">

          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Continue Learning
            </span>

            <h2 className="text-4xl font-bold mt-6">
              MERN Stack Development
            </h2>

            <p className="mt-4 text-blue-100 flex items-center gap-2">
              <FaClock />
              Lesson 8 of 20 • 12 Hours Remaining
            </p>

          </div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <FaPlayCircle size={80} />
          </motion.div>

        </div>

        <div className="mt-10">

          <div className="flex justify-between mb-3">

            <span className="font-medium">
              Course Progress
            </span>

            <span className="font-bold">
              {progress}%
            </span>

          </div>

          <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
              className="bg-white h-4 rounded-full"
            />

          </div>

        </div>

        <button className="mt-10 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition">

          Continue Learning

          <FaArrowRight />

        </button>

      </div>

    </motion.div>
  );
}

export default ContinueLearning;