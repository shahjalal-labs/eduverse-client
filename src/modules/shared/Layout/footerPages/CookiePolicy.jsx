import { motion } from "motion/react";
import {
  FaCookieBite,
  FaShieldAlt,
  FaEye,
  FaClock,
  FaHandsHelping,
} from "react-icons/fa";
import { Link } from "react-router";
import UseHelmet from "../../../../hooks/useHelmet";

const CookiePolicy = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-32 space-y-10 my-10 rounded-lg">
      <UseHelmet title="Cookie Policy" />
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-300"
      >
        🍪 Cookie Policy
      </motion.h1>

      <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto">
        At <span className="text-teal-400 font-semibold">EduVerse</span>, we use
        cookies to give you the best collaborative learning experience possible
        🌟. Here's everything you need to know about how we use them:
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-yellow-600 shadow-md space-y-3"
        >
          <FaCookieBite className="text-2xl text-yellow-400" />
          <h2 className="text-xl font-semibold text-yellow-300">
            1. What are Cookies?
          </h2>
          <p className="text-gray-300">
            Cookies are small data files stored on your device 🍩. They help
            remember your preferences, login sessions, and activity on our site.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-yellow-600 shadow-md space-y-3"
        >
          <FaShieldAlt className="text-2xl text-teal-400" />
          <h2 className="text-xl font-semibold text-yellow-300">
            2. Security First
          </h2>
          <p className="text-gray-300">
            Our cookies never store sensitive info like passwords 🔐. We use
            secure, encrypted tokens (JWT) to protect your data.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-yellow-600 shadow-md space-y-3"
        >
          <FaEye className="text-2xl text-blue-400" />
          <h2 className="text-xl font-semibold text-yellow-300">
            3. Analytics & Insights
          </h2>
          <p className="text-gray-300">
            We track basic interactions to help improve performance, like which
            assignments get more views 📈 — never your private data.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-yellow-600 shadow-md space-y-3"
        >
          <FaClock className="text-2xl text-orange-400" />
          <h2 className="text-xl font-semibold text-yellow-300">
            4. Session Cookies
          </h2>
          <p className="text-gray-300">
            These cookies expire once you close your browser. They keep you
            logged in and navigating smoothly ⏳.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-yellow-600 shadow-md space-y-3"
        >
          <FaHandsHelping className="text-2xl text-green-400" />
          <h2 className="text-xl font-semibold text-yellow-300">
            5. Your Control
          </h2>
          <p className="text-gray-300">
            You can disable cookies from your browser settings anytime. But
            without them, features like login & submissions may not work
            properly ⚙️.
          </p>
        </motion.div>
      </div>

      <div className="text-center mt-12 space-y-3">
        <p className="text-gray-400">
          Need help or have questions?{" "}
          <Link to="/contact-us" className="text-yellow-400 underline">
            Contact us
          </Link>{" "}
          anytime.
        </p>
        <Link
          to="/"
          className="btn btn-outline btn-warning rounded-full hover:scale-105 transition px-6"
        >
          Back to Home 🏠
        </Link>
      </div>
    </div>
  );
};

export default CookiePolicy;
