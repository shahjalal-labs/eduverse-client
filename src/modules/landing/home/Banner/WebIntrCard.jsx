import { motion } from "framer-motion";

const WebIntrCard = ({ i, Icon, color, title, desc }) => {
  return (
    <div>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 + i * 0.2, duration: 0.8, ease: "easeOut" },
        }}
        className={`
    relative
    rounded-2xl
    border-l-4
    p-6
    cursor-default
    bg-[#14142a]
    shadow-[0_0_15px_rgba(26,20,42,0.8),0_0_40px_5px_rgba(168,85,247,0.4)]
    border-opacity-90
    hover:-translate-y-2 hover:scale-[1.03]
    transition-transform duration-400 ease-out
    group
    overflow-visible
    ${color}
  `}
      >
        {/* Neon Glow Pulse Background */}
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-30 blur-3xl animate-pulse-slow pointer-events-none -z-10"></div>

        <Icon
          className={`
      text-4xl
      mb-4
      transition-transform duration-500
      group-hover:rotate-12
      drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]
      animate-glow-slow
    `}
        />
        <h3
          className="
      text-md font-semibold mb-2
      text-gray-100
      drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]
    "
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </motion.div>
    </div>
  );
};

export default WebIntrCard;
