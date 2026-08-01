import api from "./api";

// ===============================
// Get All Courses
// ===============================
export const getAllCourses = async () => {
  const response = await api.get("/courses");
  return response.data;
};

// ===============================
// Get Course By ID
// ===============================
export const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

// ===============================
// Search Courses
// ===============================
export const searchCourses = async (keyword) => {
  const response = await api.get(
    `/courses/search?q=${keyword}`
  );

  return response.data;
};