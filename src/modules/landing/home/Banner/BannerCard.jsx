/* import { motion } from "motion/react";
import { Link } from "react-router";

const BannerCard = () => {
  return (
    <div className="max-lg:mt-10 lg:max-w-[500px] flex-1 ">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 4 } }}
        className="sm:text-4xl text-2xl font-bold font-kaushan"
      >
        Collaborate. Create. Conquer – Together on
        <motion.span
          animate={{
            color: ["#ff5733", "#33ff33", "#8a33ff"],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          {" "}
          EduVerse,
        </motion.span>{" "}
      </motion.h1>
      <p className="py-6">
        Connect with friends, conquer assignments, and excel together. EduVerse
        is your go-to platform for collaborative online study, where every
        registered user is a friend, making group projects and knowledge sharing
        effortless. Dive into a universe of shared learning and achieve your
        academic goals, together.
      </p>
      <button className="btn btn-info btn-active rounded-full text-white">
        <Link to="/assignments">Explore Assignments</Link>
      </button>
    </div>
  );
};

export default BannerCard; */

import { motion } from "framer-motion";
import { Link } from "react-router";

const BannerCard = () => {
  return (
    <div className="max-lg:mt-10 lg:max-w-[500px] flex-1 p-8 rounded-2xl bg-[#0f172a] relative overflow-hidden shadow-[0_0_15px_rgba(255,81,255,0.3)]">
      {/* Neon Glow Background Pulse Layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-3xl opacity-30 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 1.2 } }}
        className="relative z-10 sm:text-4xl text-2xl font-bold font-kaushan text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
      >
        Collaborate. Create. Conquer – Together on
        <motion.span
          animate={{
            color: ["#ff33cc", "#33fff3", "#8a33ff"],
            textShadow: [
              "0 0 8px #ff33cc, 0 0 20px #ff33cc",
              "0 0 8px #33fff3, 0 0 20px #33fff3",
              "0 0 8px #8a33ff, 0 0 20px #8a33ff",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          className="ml-2"
        >
          EduVerse,
        </motion.span>{" "}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9, transition: { delay: 1.5, duration: 1.5 } }}
        className="relative z-10 py-6 text-gray-300 leading-relaxed drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]"
      >
        Connect with friends, conquer assignments, and excel together. EduVerse
        is your go-to platform for collaborative online study, where every
        registered user is a friend, making group projects and knowledge sharing
        effortless. Dive into a universe of shared learning and achieve your
        academic goals, together.
      </motion.p>

      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 12px 4px #ff33cc",
          textShadow: "0 0 6px #ff33cc",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 btn rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white font-semibold px-8 py-3 shadow-lg"
      >
        <Link to="/assignments" className="block">
          Explore Assignments
        </Link>
      </motion.button>
    </div>
  );
};

export default BannerCard;
