import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-4 gap-10">

        <div>

          <h2 className="text-3xl font-bold text-blue-400">
            SkillNova
          </h2>

          <p className="mt-5 text-gray-400">
            Learn today's most valuable skills from industry experts.
          </p>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Home</li>

            <li>Courses</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-4">
            Support
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Help Center</li>

            <li>Privacy Policy</li>

            <li>Terms & Conditions</li>

          </ul>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <FaFacebook className="hover:text-blue-500 cursor-pointer" />

            <FaInstagram className="hover:text-pink-500 cursor-pointer" />

            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />

            <FaGithub className="hover:text-gray-300 cursor-pointer" />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">

        © 2026 SkillNova LMS. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;