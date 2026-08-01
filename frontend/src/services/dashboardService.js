import api from "./api";

// Dashboard Statistics
export const getDashboardStats = async (userId) => {
  const response = await api.get(
    `/dashboard/stats/${userId}`
  );

  return response.data;
};

// Recent Courses
export const getRecentCourses = async (userId) => {
  const response = await api.get(
    `/dashboard/recent-courses/${userId}`
  );

  return response.data;
};