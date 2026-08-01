import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import AdminStats from "../../components/admin/AdminStats";

function AdminDashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* Sidebar */}

      <AdminSidebar />

      {/* Main Content */}

      <main className="flex-1 p-8 overflow-y-auto">

        <div className="space-y-8">

          <AdminTopbar />

          <AdminStats />

          {/* Quick Actions */}

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Quick Actions
              </h2>

              <div className="space-y-4">

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                  Add New Course
                </button>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
                  Add New Lesson
                </button>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition">
                  View Reports
                </button>

              </div>

            </div>

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                System Overview
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="border rounded-2xl p-6">

                  <h3 className="text-gray-500">
                    Total Users
                  </h3>

                  <h1 className="text-4xl font-bold mt-2">
                    Live Data
                  </h1>

                </div>

                <div className="border rounded-2xl p-6">

                  <h3 className="text-gray-500">
                    Active Courses
                  </h3>

                  <h1 className="text-4xl font-bold mt-2">
                    Live Data
                  </h1>

                </div>

                <div className="border rounded-2xl p-6">

                  <h3 className="text-gray-500">
                    Database
                  </h3>

                  <h1 className="text-2xl font-bold mt-2 text-green-600">
                    Connected
                  </h1>

                </div>

                <div className="border rounded-2xl p-6">

                  <h3 className="text-gray-500">
                    Backend Status
                  </h3>

                  <h1 className="text-2xl font-bold mt-2 text-green-600">
                    Running
                  </h1>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;