import { motion } from "framer-motion";
import {
  FaUserShield,
  FaLock,
  FaDatabase,
  FaHandshake,
  FaUserSecret,
  FaRegEye,
} from "react-icons/fa";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-32 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-300"
      >
        🔒 Privacy Policy
      </motion.h1>

      <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto">
        At <span className="text-teal-400 font-semibold">EduVerse</span>, we
        respect your privacy and are committed to protecting your personal data.
        Here's what you need to know.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-blue-600 shadow-md space-y-3"
        >
          <FaUserShield className="text-2xl text-blue-300" />
          <h2 className="text-xl font-semibold text-blue-200">
            1. Your Data is Safe
          </h2>
          <p className="text-gray-300">
            We only collect the data necessary for smooth usage — like your
            name, email, and profile info 👤.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-blue-600 shadow-md space-y-3"
        >
          <FaLock className="text-2xl text-purple-400" />
          <h2 className="text-xl font-semibold text-blue-200">
            2. Encrypted & Protected
          </h2>
          <p className="text-gray-300">
            All sensitive data is securely stored and transmitted using
            encryption technologies 🔐.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-blue-600 shadow-md space-y-3"
        >
          <FaDatabase className="text-2xl text-green-400" />
          <h2 className="text-xl font-semibold text-blue-200">
            3. Data We Collect
          </h2>
          <p className="text-gray-300">
            Assignment submissions, profile updates, contact messages, and usage
            logs are collected to improve your experience 📊.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-blue-600 shadow-md space-y-3"
        >
          <FaUserSecret className="text-2xl text-yellow-400" />
          <h2 className="text-xl font-semibold text-blue-200">
            4. No Third-Party Sharing
          </h2>
          <p className="text-gray-300">
            We do not sell or share your data with third parties 🙅. All
            analytics are internal and privacy-friendly.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-blue-600 shadow-md space-y-3"
        >
          <FaRegEye className="text-2xl text-pink-400" />
          <h2 className="text-xl font-semibold text-blue-200">
            5. Transparency
          </h2>
          <p className="text-gray-300">
            You can always request access to your data or request deletion —
            just{" "}
            <Link to="/contact-us" className="underline text-yellow-400">
              contact us
            </Link>{" "}
            📬.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-blue-600 shadow-md space-y-3"
        >
          <FaHandshake className="text-2xl text-cyan-400" />
          <h2 className="text-xl font-semibold text-blue-200">6. Consent</h2>
          <p className="text-gray-300">
            By using EduVerse, you agree to our privacy practices. We keep
            everything as transparent as possible ✨.
          </p>
        </motion.div>
      </div>

      <div className="text-center mt-12 space-y-3">
        <p className="text-gray-400">
          Questions or concerns? Feel free to{" "}
          <Link to="/contact" className="text-blue-400 underline">
            reach out
          </Link>
          .
        </p>
        <Link
          to="/"
          className="btn btn-outline btn-info rounded-full hover:scale-105 transition px-6"
        >
          Back to Home 🏠
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
