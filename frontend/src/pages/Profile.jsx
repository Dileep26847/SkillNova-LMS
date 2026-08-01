import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaUserTag,
  FaEdit,
} from "react-icons/fa";
import { getProfile, updateProfile } from "../services/profileService";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    role: "",
    phone: "",
    bio: "",
    profile_image: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile(user.id);

      setProfile({
        full_name: data.profile.full_name || "",
        email: data.profile.email || "",
        role: data.profile.role || "",
        phone: data.profile.phone || "",
        bio: data.profile.bio || "",
        profile_image: data.profile.profile_image || "",
      });
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      await updateProfile(user.id, {
        phone: profile.phone,
        bio: profile.bio,
        profile_image: profile.profile_image,
      });

      alert("Profile Updated Successfully");
    } catch (err) {
      alert("Update Failed");
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-12">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-40"></div>

        <div className="px-10 pb-10">

          <div className="-mt-16 flex flex-col items-center">

            {profile.profile_image ? (
              <img
                src={profile.profile_image}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            ) : (
              <FaUserCircle
                size={130}
                className="text-white bg-blue-600 rounded-full"
              />
            )}

            <h2 className="text-3xl font-bold mt-4">
              {profile.full_name}
            </h2>

            <p className="text-gray-500">
              {profile.role}
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div>

              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaUserTag />
                Full Name
              </label>

              <input
                type="text"
                value={profile.full_name}
                disabled
                className="w-full border rounded-xl p-3 bg-gray-100"
              />

            </div>

            <div>

              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaEnvelope />
                Email
              </label>

              <input
                type="email"
                value={profile.email}
                disabled
                className="w-full border rounded-xl p-3 bg-gray-100"
              />

            </div>

            <div>

              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaPhone />
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />

            </div>

            <div>

              <label className="font-semibold flex items-center gap-2 mb-2">
                Profile Image URL
              </label>

              <input
                type="text"
                name="profile_image"
                value={profile.profile_image}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />

            </div>

          </div>

          <div className="mt-8">

            <label className="font-semibold mb-2 block">
              Bio
            </label>

            <textarea
              rows="5"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              placeholder="Tell us about yourself..."
            ></textarea>

          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3"
          >
            <FaEdit />

            {saving ? "Saving..." : "Save Changes"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;