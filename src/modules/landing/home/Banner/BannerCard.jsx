import { motion } from "framer-motion";
import { Link } from "react-router";

const BannerCard = () => {
  return (
    <div className="max-lg:mt-10 lg:max-w-[500px] flex-1 p-8 rounded-2xl bg-[#0f172a] relative overflow-hidden shadow-lg shadow-black/30">
      {/* Soft background gradient glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-[80px] opacity-20 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-700"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.h1
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 1.2 } }}
        className="relative z-10 sm:text-4xl text-2xl font-bold font-kaushan text-white"
      >
        Collaborate. Create. Conquer – Together on
        <motion.span
          animate={{
            color: ["#a855f7", "#22d3ee", "#a855f7"], // purple-400 -> cyan-400 cycle
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          className="ml-2"
        >
          EduVerse
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85, transition: { delay: 1, duration: 1.2 } }}
        className="relative z-10 py-6 text-gray-300 leading-relaxed"
      >
        Connect with friends, conquer assignments, and excel together. EduVerse
        is your collaborative study space where every registered user is a
        friend — making group projects, peer feedback, and knowledge sharing
        effortless.
      </motion.p>

      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 15px rgba(168,85,247,0.5)",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 rounded-full bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-700 text-white font-semibold px-8 py-3 shadow-md"
      >
        <Link to="/assignments" className="block">
          🚀 Explore Assignments
        </Link>
      </motion.button>
    </div>
  );
};

export default BannerCard;
