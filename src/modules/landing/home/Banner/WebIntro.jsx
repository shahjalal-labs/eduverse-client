// import { Link } from "react-router";
// import {
//   FaLightbulb,
//   FaUserFriends,
//   FaCheckCircle,
//   FaBookOpen,
//   FaArrowRight,
// } from "react-icons/fa";
//
// const WebIntro = () => {
//   return (
//     <div className="mt-10 mb-18 min-h-[80vh] g-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-700 px-6 md:px-12 py-10 flex flex-col items-center justify-center font-sans relative overflow-hidden rounded-2xl">
//       {/* Animated Background Effects */}
//       {/* <div className="absolute w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-20 top-0 -left-10 animate-pulse"></div> */}
//       {/* <div className="absolute w-80 h-80 bg-indigo-300 rounded-full blur-3xl opacity-20 bottom-0 -right-10 animate-pulse"></div> */}
//
//       {/* Intro Title */}
//       <h1 className="text-5xl md:text-6xl font-extrabold text-center text-indigo-700 mb-6 animate-fade-down">
//         🎓 <span className="text-purple-600">EduVerse</span>
//       </h1>
//
//       {/* Subtitle */}
//       <p className="text-xl md:text-2xl text-center text-gray-600 mb-10 max-w-3xl animate-fade-in">
//         A collaborative learning space where{" "}
//         <span className="font-medium text-indigo-500">students</span> and{" "}
//         <span className="font-medium text-purple-500">friends</span> challenge
//         each other with assignments, submit answers, and grow together 🌱.
//       </p>
//
//       {/* Visual Flow Steps */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full text-left mb-12">
//         {/* Step 1 */}
//         <div className=" rounded-2xl shadow-lg border-l-4 border-purple-500 p-6 hover:-translate-y-1 transition-transform duration-300 group">
//           <FaLightbulb className="text-purple-500 text-3xl mb-4 group-hover:rotate-6 transition-transform" />
//           <h3 className="text-xl font-semibold mb-2">
//             1. Create Assignments ✍️
//           </h3>
//           <p className="text-gray-600 text-sm">
//             Add custom assignments with titles, marks, due dates, and
//             difficulty. Designed for peer-led study groups.
//           </p>
//         </div>
//
//         {/* Step 2 */}
//         <div className=" rounded-2xl shadow-lg border-l-4 border-blue-500 p-6 hover:-translate-y-1 transition-transform duration-300 group">
//           <FaUserFriends className="text-blue-500 text-3xl mb-4 group-hover:rotate-6 transition-transform" />
//           <h3 className="text-xl font-semibold mb-2">2. Submit Together 🤝</h3>
//           <p className="text-gray-600 text-sm">
//             Submit work using a Google Docs link, leave personal notes, and
//             track submission status easily.
//           </p>
//         </div>
//
//         {/* Step 3 */}
//         <div className=" rounded-2xl shadow-lg border-l-4 border-green-500 p-6 hover:-translate-y-1 transition-transform duration-300 group">
//           <FaCheckCircle className="text-green-500 text-3xl mb-4 group-hover:rotate-6 transition-transform" />
//           <h3 className="text-xl font-semibold mb-2">
//             3. Evaluate & Feedback 📈
//           </h3>
//           <p className="text-gray-600 text-sm">
//             Review others' submissions (except your own), assign marks, and
//             provide constructive feedback.
//           </p>
//         </div>
//
//         {/* Step 4 */}
//         <div className=" rounded-2xl shadow-lg border-l-4 border-yellow-400 p-6 hover:-translate-y-1 transition-transform duration-300 group">
//           <FaBookOpen className="text-yellow-400 text-3xl mb-4 group-hover:rotate-6 transition-transform" />
//           <h3 className="text-xl font-semibold mb-2">4. Track Progress 📊</h3>
//           <p className="text-gray-600 text-sm">
//             Stay on top with dashboards showing pending, completed, and
//             evaluated assignments in real time.
//           </p>
//         </div>
//       </div>
//
//       {/* Benefits / Highlights */}
//       <div className="mb-12 text-center max-w-4xl animate-fade-in-up">
//         <h2 className="text-2xl font-bold text-indigo-600 mb-4">
//           💡 Why EduVerse?
//         </h2>
//         <ul className="text-gray-700 text-md leading-relaxed space-y-2">
//           <li>✅ Empower your friends to challenge you with real tasks.</li>
//           <li>
//             ✅ Learn responsibility, improve collaboration, and sharpen feedback
//             skills.
//           </li>
//           <li>
//             ✅ Built for casual group study & advanced collaborative learning —
//             no teachers needed!
//           </li>
//         </ul>
//       </div>
//
//       {/* CTA Button */}
//       <Link
//         to="/assignments"
//         className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-800 hover:to-cyan-400 text-white font-bold px-8 py-4 rounded-full shadow-md transition-transform hover:scale-105 duration-300 flex items-center gap-2 text-lg animate-fade-in-up"
//       >
//         🚀 Enter EduVerse <FaArrowRight />
//       </Link>
//     </div>
//   );
// };
//
// export default WebIntro;

import { Link } from "react-router";
import {
  FaLightbulb,
  FaUserFriends,
  FaCheckCircle,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FaLightbulb,
    color: "text-purple-400 border-purple-500",
    title: "1. Create Assignments ✍️",
    desc: "Add custom assignments with titles, marks, due dates, and difficulty. Designed for peer-led study groups.",
  },
  {
    icon: FaUserFriends,
    color: "text-cyan-400 border-cyan-500",
    title: "2. Submit Together 🤝",
    desc: "Submit work using a Google Docs link, leave personal notes, and track submission status easily.",
  },
  {
    icon: FaCheckCircle,
    color: "text-green-400 border-green-500",
    title: "3. Evaluate & Feedback 📈",
    desc: "Review others' submissions (except your own), assign marks, and provide constructive feedback.",
  },
  {
    icon: FaBookOpen,
    color: "text-yellow-400 border-yellow-500",
    title: "4. Track Progress 📊",
    desc: "Stay on top with dashboards showing pending, completed, and evaluated assignments in real time.",
  },
];

const WebIntro = () => {
  return (
    <div className="relative mt-10 mb-18 min-h-[80vh] bg-gradient-to-br from-[#0a0a1f] via-[#1c1c3a] to-[#111123] text-gray-200 px-6 md:px-12 py-14 flex flex-col items-center justify-center font-sans rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(128,0,255,0.5)]">
      {/* Neon Glow Blurred Background Orbs */}
      <div className="absolute w-72 h-72 rounded-full bg-purple-600 opacity-30 blur-[100px] top-[-6rem] left-[-6rem] animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500 opacity-25 blur-[100px] bottom-[-6rem] right-[-4rem] animate-[pulse_6s_ease-in-out_infinite] animation-delay-[3s]" />

      {/* Intro Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
        className="text-5xl md:text-6xl font-extrabold text-center text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)] mb-6 select-none"
      >
        🎓{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
          EduVerse
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 0.9,
          y: 0,
          transition: { delay: 0.3, duration: 1.2 },
        }}
        className="text-xl md:text-2xl text-center text-gray-400 max-w-3xl mb-12 select-none"
      >
        A collaborative learning space where{" "}
        <span className="font-semibold text-cyan-400">students</span> and{" "}
        <span className="font-semibold text-purple-400">friends</span> challenge
        each other with assignments, submit answers, and grow together 🌱.
      </motion.p>

      {/* Visual Flow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full text-left mb-14">
        {steps.map(({ icon: Icon, color, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4 + i * 0.2, duration: 0.8 },
            }}
            className={`rounded-2xl border-l-4 p-6 cursor-default bg-[#14142a] shadow-lg border-opacity-80 hover:-translate-y-1 transition-transform duration-300 group ${color}`}
          >
            <Icon
              className={`text-4xl mb-4 transition-transform duration-300 group-hover:rotate-6 drop-shadow-[0_0_8px_currentColor]`}
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-100">
              {title}
            </h3>
            <p className="text-gray-400 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Benefits / Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 0.9,
          y: 0,
          transition: { delay: 1, duration: 1.2 },
        }}
        className="mb-12 text-center max-w-4xl select-none"
      >
        <h2 className="text-2xl font-bold text-purple-400 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]">
          💡 Why EduVerse?
        </h2>
        <ul className="text-gray-300 text-md leading-relaxed space-y-3">
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

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.5, duration: 1.2 },
        }}
      >
        <Link
          to="/assignments"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-600 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 duration-300 select-none drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]"
        >
          🚀 Enter EduVerse <FaArrowRight />
        </Link>
      </motion.div>
    </div>
  );
};

export default WebIntro;
