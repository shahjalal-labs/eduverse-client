import { motion } from "motion/react";
import {
  FaUserFriends,
  FaRegLightbulb,
  FaLaptopCode,
  FaComments,
} from "react-icons/fa";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="rounded-xl my-16 min-h-screen px-6 sm:px-12 lg:px-24 py-20 bg-gradient-to-b from-[#111827] to-[#1f2937] text-white">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
      >
        🚀 Welcome to <span className="text-cyan-400">EduVerse</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-3xl mx-auto text-center text-gray-300 text-base sm:text-lg leading-relaxed"
      >
        EduVerse is your interactive assignment collaboration platform 🌐. It
        empowers friends and classmates to create, share, review, and improve
        assignments in a fun and intuitive environment. Whether you're
        submitting, grading, or just learning together — this is the universe
        for you.
      </motion.p>

      {/* Core Sections */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<FaUserFriends size={36} className="text-blue-400" />}
          title="Social Learning"
          desc="Every user is a study buddy. Share progress, exchange feedback, and grow together. 🤝"
        />
        <FeatureCard
          icon={<FaRegLightbulb size={36} className="text-yellow-400" />}
          title="Collaborative Projects"
          desc="Take assignments together or solo, track submissions, and learn through peer support."
        />
        <FeatureCard
          icon={<FaLaptopCode size={36} className="text-emerald-400" />}
          title="Smart Submission Flow"
          desc="Submit Google Doc links, attach notes, and receive structured feedback directly from your peers."
        />
        <FeatureCard
          icon={<FaComments size={36} className="text-pink-400" />}
          title="Peer Evaluation"
          desc="Become a reviewer. Evaluate others’ assignments (not your own) and improve your critical thinking."
        />
      </div>

      {/* Vision Section */}
      <div className="mt-24 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-300"
        >
          Why EduVerse? 🌟
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          We built EduVerse for those who believe learning shouldn't be lonely.
          In a world of competitive education, we foster **collaboration,
          fairness, and feedback** — giving students a space where every
          contribution matters. Learn. Review. Improve. Together.
        </motion.p>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <Link
          to="/assignments"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105"
        >
          🚀 Start Exploring Assignments
        </Link>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center space-y-4"
    >
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </motion.div>
  );
};

export default AboutUs;
