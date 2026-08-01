import api from "./api";

// ==========================================
// Enroll Course
// ==========================================
export const enrollCourse = async (userId, courseId) => {
  const response = await api.post("/enrollments/enroll", {
    user_id: userId,
    course_id: courseId,
  });

  return response.data;
};

// ==========================================
// My Courses
// ==========================================
export const getMyCourses = async (userId) => {
  const response = await api.get(
    `/enrollments/my-courses/${userId}`
  );

  return response.data;
};

// ==========================================
// Cancel Enrollment (Optional)
// ==========================================
export const cancelEnrollment = async (enrollmentId) => {
  const response = await api.delete(
    `/enrollments/${enrollmentId}`
  );

  return response.data;
};