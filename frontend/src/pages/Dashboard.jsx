import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <h1 className="text-4xl font-bold">

          Welcome {user?.full_name}

        </h1>

        <p className="mt-4 text-gray-500">

          {user?.email}

        </p>

        <p className="mt-2 text-blue-600 font-bold">

          {user?.role}

        </p>

        <button

          onClick={logout}

          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl"

        >

          Logout

        </button>

      </div>

    </div>

  );

}

export default Dashboard;