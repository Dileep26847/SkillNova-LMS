import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaSave,
  FaTrash,
  FaMoon,
  FaBell,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";

import {
  successToast,
  errorToast,
} from "../utils/toast";

import { changePassword } from "../services/settingsService";

function Settings() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    full_name: user?.full_name || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    notifications: true,
    darkMode: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const saveProfile = () => {
    successToast("Profile Updated Successfully");
  };

  const changePasswordHandler = async () => {

    if (form.newPassword !== form.confirmPassword) {
      errorToast("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      const data = await changePassword(
        user.id,
        {
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        }
      );

      successToast(data.message);

      setForm({
        ...form,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (error) {

      errorToast(
        error.response?.data?.message ||
        "Password update failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="bg-slate-100 min-h-screen py-12">

      <div className="max-w-6xl mx-auto px-8">

        <h1 className="text-5xl font-bold mb-10">

          Account Settings

        </h1>

        {/* Profile */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-8">

            <FaUser className="text-blue-600 text-2xl" />

            <h2 className="text-3xl font-bold">

              Profile Information

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold">

                Full Name

              </label>

              <div className="relative mt-2">

                <FaUser className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  className="w-full border rounded-xl py-3 pl-12 pr-4"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">

                Email

              </label>

              <div className="relative mt-2">

                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="email"
                  value={form.email}
                  disabled
                  className="w-full border rounded-xl py-3 pl-12 pr-4 bg-gray-100"
                />

              </div>

            </div>

          </div>

          <button
            onClick={saveProfile}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-3"
          >

            <FaSave />

            Save Changes

          </button>

        </div>
                {/* Change Password */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <div className="flex items-center gap-3 mb-8">

            <FaLock className="text-green-600 text-2xl" />

            <h2 className="text-3xl font-bold">

              Change Password

            </h2>

          </div>

          <div className="space-y-6">

            <div>

              <label className="font-semibold">

                Current Password

              </label>

              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 mt-2"
                placeholder="Enter current password"
              />

            </div>

            <div>

              <label className="font-semibold">

                New Password

              </label>

              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 mt-2"
                placeholder="Enter new password"
              />

            </div>

            <div>

              <label className="font-semibold">

                Confirm Password

              </label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 mt-2"
                placeholder="Confirm new password"
              />

            </div>

          </div>

          <button
            onClick={changePasswordHandler}
            disabled={loading}
            className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            {loading
              ? "Updating..."
              : "Update Password"}
          </button>

        </div>

        {/* Preferences */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <div className="flex items-center gap-3 mb-8">

            <FaShieldAlt className="text-purple-600 text-2xl" />

            <h2 className="text-3xl font-bold">

              Preferences

            </h2>

          </div>

          <div className="space-y-6">

            <label className="flex justify-between items-center border rounded-2xl p-5">

              <div className="flex items-center gap-3">

                <FaBell className="text-blue-600" />

                <div>

                  <h3 className="font-semibold">

                    Email Notifications

                  </h3>

                  <p className="text-gray-500 text-sm">

                    Receive notifications about courses.

                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                name="notifications"
                checked={form.notifications}
                onChange={handleChange}
                className="w-5 h-5"
              />

            </label>

            <label className="flex justify-between items-center border rounded-2xl p-5">

              <div className="flex items-center gap-3">

                <FaMoon className="text-indigo-600" />

                <div>

                  <h3 className="font-semibold">

                    Dark Mode

                  </h3>

                  <p className="text-gray-500 text-sm">

                    Coming Soon

                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                name="darkMode"
                checked={form.darkMode}
                onChange={handleChange}
                disabled
                className="w-5 h-5"
              />

            </label>

          </div>

        </div>
                {/* Danger Zone */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-red-200">

          <div className="flex items-center gap-3 mb-6">

            <FaTrash className="text-red-600 text-2xl" />

            <h2 className="text-3xl font-bold text-red-600">
              Danger Zone
            </h2>

          </div>

          <p className="text-gray-600 leading-7">
            Deleting your account is permanent. All your enrolled
            courses, progress, certificates, and profile information
            will be removed permanently.
          </p>

          <button
            onClick={() =>
              errorToast(
                "Delete Account feature will be available soon."
              )
            }
            className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition flex items-center gap-3"
          >
            <FaTrash />

            Delete Account
          </button>

        </div>

      </div>

    </div>

  );
}

export default Settings;