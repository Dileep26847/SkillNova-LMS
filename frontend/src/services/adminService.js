import api from "./api";

// ==========================================
// Dashboard Statistics
// ==========================================
export const getDashboardStats = async () => {
  const response = await api.get("/admin/dashboard");
  return response.data;
};

// ==========================================
// Get All Students
// ==========================================
export const getAllStudents = async () => {
  const response = await api.get("/admin/students");
  return response.data;
};

// ==========================================
// Delete Student
// ==========================================
export const deleteStudent = async (id) => {
  const response = await api.delete(`/admin/students/${id}`);
  return response.data;
};