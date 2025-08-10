// import React from "react";
// import { eduverseFAQ } from "./faq.constant";
// import TypewriterText from "../../utils/TypeWriterEffect";
// // import { eduverseFAQ } from "./eduverseFAQ"; // Adjust the path as needed
//
// const FAQ = () => {
//   return (
//     <div className="space-y-4 my-10 p-8">
//       {" "}
//       <h2 className="text-3xl max-sm:text-xl font-bold text-center mb-10 font-courgette text-shadow-sm text-shadow-purple-500">
//         <TypewriterText words={["Frequently Asked Questions"]} />
//       </h2>
//       {/* Added space-y for better visual separation */}
//       {eduverseFAQ.map((item, index) => (
//         <div
//           key={index}
//           className="hover-effect collapse collapse-plus bg-base-100 border border-base-300"
//         >
//           {/* Using unique name for radio buttons based on index to ensure only one is open at a time */}
//           <input
//             type="radio"
//             name={`my-accordion-${index}`}
//             defaultChecked={index === 0}
//           />
//           <div className="collapse-title font-semibold">{item.question}</div>
//           <div className="collapse-content text-sm">{item.answer}</div>
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default FAQ;

import React, { useState } from "react";
import { eduverseFAQ } from "./faq.constant";
import TypewriterText from "../../utils/TypeWriterEffect";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  // Track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="ax-w-4xl mx-auto px-6 py-12 space-y-8 bg-[#0a0c12] rounded-3xl border border-green-800 shadow-lg shadow-green-900/40">
      <h2 className="text-4xl max-sm:text-2xl font-mono font-bold text-center mb-12 text-green-400 drop-shadow-glow">
        <TypewriterText words={["Frequently Asked Questions"]} />
      </h2>

      <div className="flex flex-col gap-4">
        {eduverseFAQ.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              layout
              initial={{ borderColor: "#064e3b" }}
              animate={{
                borderColor: isOpen ? "#22c55e" : "#064e3b",
                boxShadow: isOpen
                  ? "0 0 15px 4px rgba(34, 197, 94, 0.6)"
                  : "none",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="cursor-pointer rounded-xl border-2 bg-black/40 p-5"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <motion.h3
                className={`text-green-300 font-mono font-semibold text-lg select-none flex justify-between items-center`}
                layout="position"
              >
                <span>{item.question}</span>
                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-green-400" : "text-green-600"
                  }`}
                >
                  +
                </span>
              </motion.h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-3 text-green-400 font-mono text-sm leading-relaxed tracking-wide"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
