import api from "./api";

// ===============================
// Change Password
// ===============================
export const changePassword = async (
  userId,
  passwordData
) => {
  const response = await api.put(
    `/settings/change-password/${userId}`,
    passwordData
  );

  return response.data;
};