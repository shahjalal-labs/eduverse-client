import { motion } from "motion/react";
import {
  FaCheckCircle,
  FaUserShield,
  FaFileContract,
  FaLock,
  FaGlobe,
  FaSmile,
} from "react-icons/fa";
import { Link } from "react-router";

const TermsCondition = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-32 space-y-8">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-cyan-400"
      >
        📜 Terms & Conditions
      </motion.h1>

      <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto">
        Welcome to <span className="text-teal-300 font-semibold">EduVerse</span>{" "}
        🌍 — a platform crafted to empower students and friends to collaborate,
        submit, and review assignments together in a secure and fun learning
        environment. 🎓✨
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-cyan-800 shadow-lg space-y-3"
        >
          <FaCheckCircle className="text-2xl text-green-400" />
          <h2 className="text-xl font-semibold text-cyan-300">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-300">
            By using EduVerse, you agree to abide by these terms. We reserve the
            right to update them anytime. 🙏
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-cyan-800 shadow-lg space-y-3"
        >
          <FaUserShield className="text-2xl text-yellow-400" />
          <h2 className="text-xl font-semibold text-cyan-300">
            2. User Responsibility
          </h2>
          <p className="text-gray-300">
            Users must provide accurate information and not misuse assignment
            submission or grading systems. ⚖️
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-cyan-800 shadow-lg space-y-3"
        >
          <FaLock className="text-2xl text-red-400" />
          <h2 className="text-xl font-semibold text-cyan-300">
            3. Privacy & Security
          </h2>
          <p className="text-gray-300">
            Your data is secure with us 🔐. We use HTTPS and JWTs to protect
            your session and data at all times.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-cyan-800 shadow-lg space-y-3"
        >
          <FaFileContract className="text-2xl text-purple-400" />
          <h2 className="text-xl font-semibold text-cyan-300">
            4. Intellectual Property
          </h2>
          <p className="text-gray-300">
            Assignments and content remain your property. Do not copy or misuse
            others' work. Respect originality! 🧠
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-cyan-800 shadow-lg space-y-3"
        >
          <FaGlobe className="text-2xl text-blue-400" />
          <h2 className="text-xl font-semibold text-cyan-300">
            5. Global Access
          </h2>
          <p className="text-gray-300">
            EduVerse is accessible 🌐 worldwide, but usage must comply with
            local laws and your educational policies.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1f2937] p-6 rounded-xl border border-cyan-800 shadow-lg space-y-3"
        >
          <FaSmile className="text-2xl text-pink-400" />
          <h2 className="text-xl font-semibold text-cyan-300">
            6. Respectful Environment
          </h2>
          <p className="text-gray-300">
            No harassment, spam, or offensive behavior. We foster a supportive,
            inclusive learning space. 🤝❤️
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-12"
      >
        <p className="text-gray-400 mb-4">
          For any questions, check out our{" "}
          <Link to="/contact-us" className="underline text-cyan-400">
            Contact Us
          </Link>{" "}
          page 📬
        </p>
        <Link
          to="/"
          className="btn btn-outline btn-accent rounded-full px-6 hover:scale-105 transition"
        >
          Back to Home 🏠
        </Link>
      </motion.div>
    </div>
  );
};

export default TermsCondition;
