import { Link } from "react-router";
import {
  FaLightbulb,
  FaUserFriends,
  FaCheckCircle,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import WebIntrCard from "./WebIntrCard";

const steps = [
  {
    icon: FaLightbulb,
    color: "text-purple-400",
    title: "1. Create Assignments ✍️",
    desc: "Add custom assignments with titles, marks, due dates, and difficulty. Designed for peer-led study groups.",
  },
  {
    icon: FaUserFriends,
    color: "text-cyan-400",
    title: "2. Submit Together 🤝",
    desc: "Submit work using a Google Docs link, leave personal notes, and track submission status easily.",
  },
  {
    icon: FaCheckCircle,
    color: "text-green-400",
    title: "3. Evaluate & Feedback 📈",
    desc: "Review others' submissions (except your own), assign marks, and provide constructive feedback.",
  },
  {
    icon: FaBookOpen,
    color: "text-yellow-400",
    title: "4. Track Progress 📊",
    desc: "Stay on top with dashboards showing pending, completed, and evaluated assignments in real time.",
  },
];

const WebIntro = () => {
  return (
    <div className="relative mt-10 mb-18 min-h-[80vh] bg-gradient-to-br from-[#050517] via-[#121230] to-[#0a0a1f] text-gray-300 px-6 md:px-12 py-16 flex flex-col items-center justify-center font-sans rounded-3xl overflow-hidden shadow-lg">
      {/* Soft background orbs */}
      <div className="absolute w-80 h-80 rounded-full bg-purple-600 opacity-10 blur-[80px] -top-24 -left-24" />
      <div className="absolute w-80 h-80 rounded-full bg-cyan-500 opacity-10 blur-[80px] -bottom-24 -right-20" />

      {/* Intro Title */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
        className="text-4xl md:text-5xl font-extrabold text-center text-purple-400 mb-6 select-none"
      >
        🎓 <span className="text-cyan-400">EduVerse</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 0.85,
          y: 0,
          transition: { delay: 0.4, duration: 1.3 },
        }}
        className="text-xl md:text-2xl text-center max-w-3xl mb-14 select-none font-light tracking-wide text-gray-400"
      >
        A collaborative learning space where{" "}
        <span className="font-semibold text-cyan-400">students</span> and{" "}
        <span className="font-semibold text-purple-400">friends</span> challenge
        each other with assignments, submit answers, and grow together 🌱.
      </motion.p>

      {/* Visual Flow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full text-left mb-16">
        {steps.map(({ icon: Icon, color, title, desc }, i) => (
          <WebIntrCard
            key={i}
            i={i}
            Icon={Icon}
            color={color}
            title={title}
            desc={desc}
          />
        ))}
      </div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 0.9,
          y: 0,
          transition: { delay: 1.1, duration: 1.3 },
        }}
        className="mb-14 text-center max-w-4xl select-none"
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-5">
          💡 Why EduVerse?
        </h2>
        <ul className="text-gray-400 text-lg leading-relaxed space-y-4">
          <li>✅ Empower your friends to challenge you with real tasks.</li>
          <li>
            ✅ Learn responsibility, improve collaboration, and sharpen feedback
            skills.
          </li>
          <li>
            ✅ Built for casual group study & advanced collaborative learning —
            no teachers needed!
          </li>
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.6, duration: 1.3 },
        }}
      >
        <Link
          to="/assignments"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 via-cyan-500 to-purple-800 hover:from-cyan-500 hover:to-purple-700 text-white font-extrabold px-10 py-4 rounded-full shadow-md transition-transform hover:scale-105 duration-300"
        >
          🚀 Enter EduVerse <FaArrowRight />
        </Link>
      </motion.div>
    </div>
  );
};

export default WebIntro;
