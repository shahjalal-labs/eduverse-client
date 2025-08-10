/* const UpdateAssignmentIntro = ({ title, img }) => {
  return (
    <div className="max-w-3xl mx-auto rounded-lg p-5 shadow-d mb-2 bg-base-100 hover-effect">
      <div className="flex justify-cente gap-3 items-center mb-4">
        <div className="w-[170px] max-lg:hidden">
          <img src={img} className="rounded-xl" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-primary mb-4">
            ✏️ Update: <span className="text-purple-500">{title}</span>
          </h2>
          <p className="text-sm leading-relaxed text-center max-w-2xl mx-auto">
            You're now editing an existing assignment. Make sure to carefully
            review and update the title, description, total marks, difficulty
            level, and due date. Once updated, the changes will reflect across
            the entire platform.
            <br className="hidden sm:block" />
            <span className="font-medium text-yellow-600 ">Tip:</span> Keep
            deadlines realistic and descriptions clear to help students
            understand expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignmentIntro; */

import { motion } from "framer-motion";

const UpdateAssignmentIntro = ({ title, img }) => {
  return (
    <motion.div
      className="max-w-3xl mx-auto rounded-xl p-6 bg-base-900 shadow-lg shadow-purple-700/50 backdrop-blur-sm border border-purple-700 hover:shadow-purple-500 hover:scale-[1.02] transition-transform duration-300 cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <div className="flex items-center gap-6 max-lg:flex-col max-lg:gap-5">
        {/* Thumbnail with glow pulse */}
        <div className="w-[180px] rounded-lg overflow-hidden max-lg:w-full max-lg:mx-auto border border-purple-600 shadow-glow-purple animate-pulse-glow">
          <img
            src={img}
            alt={`Assignment: ${title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-center max-w-xl mx-auto max-lg:max-w-full">
          <h2 className="text-2xl font-bold text-purple-400 mb-3 tracking-wide select-text">
            ✏️ Update: <span className="text-indigo-400">{title}</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-300 font-mono select-text">
            You're now editing an existing assignment. Carefully review and
            update the title, description, marks, difficulty, and due date.
            Updates will reflect platform-wide.
            <br className="hidden sm:block" />
            <span className="font-semibold text-yellow-400 mt-2 inline-block">
              Tip:
            </span>{" "}
            Keep deadlines realistic and descriptions clear to help students
            understand expectations.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default UpdateAssignmentIntro;
