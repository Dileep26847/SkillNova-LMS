import { FaPlus, FaEdit, FaTrash, FaUsers } from "react-icons/fa";

function QuickActions() {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-8">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <button className="bg-blue-600 text-white rounded-xl py-4 flex justify-center gap-3 items-center">
          <FaPlus />
          Add Course
        </button>

        <button className="bg-green-600 text-white rounded-xl py-4 flex justify-center gap-3 items-center">
          <FaEdit />
          Edit Course
        </button>

        <button className="bg-red-500 text-white rounded-xl py-4 flex justify-center gap-3 items-center">
          <FaTrash />
          Delete Course
        </button>

        <button className="bg-purple-600 text-white rounded-xl py-4 flex justify-center gap-3 items-center">
          <FaUsers />
          Students
        </button>

      </div>

    </div>

  );
}

export default QuickActions;