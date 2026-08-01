import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatsCards from "../components/dashboard/StatsCards";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import LearningChart from "../components/dashboard/LearningChart";
import CourseAnalytics from "../components/dashboard/CourseAnalytics";
import RecentCourses from "../components/dashboard/RecentCourses";
import Activity from "../components/dashboard/Activity";
import AchievementCard from "../components/dashboard/AchievementCard";
import ProfileCard from "../components/dashboard/ProfileCard";

function StudentDashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <main className="flex-1 p-8 overflow-y-auto">

        <div className="space-y-8">

          {/* Topbar */}

          <Topbar />

          {/* Stats */}

          <StatsCards />

          {/* Continue Learning */}

          <ContinueLearning />

          {/* Charts */}

          <div className="grid lg:grid-cols-2 gap-8">

            <LearningChart />

            <CourseAnalytics />

          </div>

          {/* Bottom Section */}

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left */}

            <div className="lg:col-span-2 space-y-8">

              <RecentCourses />

              <AchievementCard />

            </div>

            {/* Right */}

            <div className="space-y-8">

              <ProfileCard />

              <Activity />

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default StudentDashboard;