import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTopbar from "../components/admin/AdminTopbar";
import AdminStats from "../components/admin/AdminStats";
import QuickActions from "../components/admin/QuickActions";
import RecentCourses from "../components/admin/RecentCourses";

function AdminDashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8">

        <AdminTopbar />

        <AdminStats />

        <div className="grid lg:grid-cols-2 gap-8">

          <QuickActions />

          <RecentCourses />

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;