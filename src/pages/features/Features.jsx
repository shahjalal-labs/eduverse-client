import { motion } from "framer-motion";
import {
  FaPlus,
  FaClipboardList,
  FaCheckCircle,
  FaFilter,
  FaEdit,
  FaEye,
  FaChartLine,
  FaGoogleDrive,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPlus className="text-pink-300 text-3xl" />,
    title: "Create Assignments",
    description:
      "Easily create tasks with titles, marks, difficulty levels, and deadlines.",
    orb: "bg-pink-500",
  },
  {
    icon: <FaClipboardList className="text-purple-300 text-3xl" />,
    title: "Attempt Assignments",
    description:
      "Submit answers via Google Docs with notes and progress tracking.",
    orb: "bg-purple-500",
  },
  {
    icon: <FaCheckCircle className="text-indigo-300 text-3xl" />,
    title: "Evaluate Peers",
    description: "Review and grade your peers to sharpen your understanding.",
    orb: "bg-indigo-500",
  },
  {
    icon: <FaFilter className="text-fuchsia-300 text-3xl" />,
    title: "Smart Filtering",
    description:
      "Use advanced filters to sort assignments by keyword or difficulty.",
    orb: "bg-fuchsia-500",
  },
  {
    icon: <FaEdit className="text-pink-200 text-3xl" />,
    title: "Update Assignments",
    description:
      "Edit your posted tasks with validations and auto-filled forms.",
    orb: "bg-pink-500",
  },
  {
    icon: <FaEye className="text-purple-200 text-3xl" />,
    title: "Assignment Details",
    description: "Deep dive into task metadata, feedback, and comments.",
    orb: "bg-purple-500",
  },
  {
    icon: <FaChartLine className="text-violet-200 text-3xl" />,
    title: "Track Progress",
    description: "Visualize your academic growth with insightful analytics.",
    orb: "bg-violet-500",
  },
  {
    icon: <FaGoogleDrive className="text-pink-300 text-3xl" />,
    title: "Google Docs Support",
    description: "Integrate Docs seamlessly for smooth submission and access.",
    orb: "bg-pink-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 0 30px rgba(255,51,204,0.4)",
  },
};

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#05060a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-mono font-bold mb-6 text-pink-400 drop-shadow-[0_0_8px_rgba(255,51,204,0.8)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🚀 Features That Make You Smarter
        </motion.h2>
        <motion.p
          className="text-pink-200 text-lg max-w-3xl mx-auto mb-16 font-mono tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          From creating and completing assignments to grading your peers —
          EduVerse empowers your study group with every essential tool.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-3xl p-8 cursor-pointer group bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
            >
              {/* Orb Glow */}
              <div
                className={`absolute w-32 h-32 ${feature.orb} opacity-20 blur-[80px] -top-10 -left-10`}
              />

              {/* Icon */}
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-6 bg-black/30 backdrop-blur-lg shadow-inner">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-pink-300 group-hover:text-pink-400 duration-300 font-mono">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-pink-200/80 text-sm mt-3 tracking-wide leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
