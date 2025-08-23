// import { motion } from "motion/react";
// import { Link } from "react-router";
// const difficultyColors = {
//   easy: "bg-green-100 text-green-800",
//   medium: "bg-yellow-100 text-yellow-800",
//   hard: "bg-red-100 text-red-800",
// };
// const AssignmentDetailsCard = ({ assignmentDetails }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.85 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="max-w-4xl w-full  rounded-3xl shadow-xl hover:shadow-4xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer sm:px-8 px-4 py-4"
//     >
//       {/* Thumbnail */}
//       <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
//         <img
//           src={assignmentDetails?.thumbnailUrl}
//           alt={assignmentDetails?.title}
//           className="w-full h-[400px] object-cover max-sm:h-64 transform hover:scale-105 transition-transform duration-500"
//           loading="lazy"
//         />
//       </div>
//
//       {/* Title */}
//       <h1 className="text-3xl max-sm:text-xl text-purple-400 font-semibold mb-4 tracking-tight text-gray-500 drop-shadow-sm">
//         {assignmentDetails?.title}
//       </h1>
//
//       {/* Description */}
//       <p className="text-lg text-gray-700 max-sm:text-sm mb-6 leading-relaxed font-sans tracking-wide">
//         {assignmentDetails?.description}
//       </p>
//
//       {/* Info Section */}
//       <div className="flex flex-wrap items-center justify-between gap-4">
//         <div className="badge badge-primary px-4 py-3 text-lg font-semibold shadow-md cursor-default select-none">
//           Marks: <span className="ml-2">{assignmentDetails?.marks}</span>
//         </div>
//
//         <div
//           className={`badge px-4 py-3 font-semibold shadow-md cursor-default select-none ${difficultyColors[assignmentDetails?.difficulty]}`}
//           title={`Difficulty: ${assignmentDetails?.difficulty}`}
//         >
//           Difficulty:{" "}
//           <span className="capitalize ml-2">
//             {assignmentDetails?.difficulty}
//           </span>
//         </div>
//
//         <div className="badge badge-accent px-4 py-[2px] font-semibold shadow-md cursor-default select-none h-fit">
//           Due Date:{" "}
//           <span className="ml-2 ">
//             {new Date(assignmentDetails?.dueDate).toLocaleDateString(
//               undefined,
//               {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               },
//             )}
//           </span>
//         </div>
//
//         <div className="badge badge-info px-4 py-3 font-semibold shadow-md cursor-default select-none truncate max-w-xs">
//           Creator:{" "}
//           <span className="ml-2">{assignmentDetails?.creatorEmail}</span>
//         </div>
//       </div>
//       <div className="flex-center mt-7 mb-4">
//         <Link
//           to={`/assignment/submit/${assignmentDetails?._id}`}
//           className="btn btn-outline btn-wide btn-info rounded-full "
//         >
//           Take Assignment
//         </Link>
//       </div>
//     </motion.div>
//   );
// };
//
// export default AssignmentDetailsCard;
//
import { motion } from "motion/react";
import { Link } from "react-router";

const difficultyColors = {
  easy: "bg-green-900 text-green-400",
  medium: "bg-yellow-900 text-yellow-400",
  hard: "bg-red-900 text-red-400",
};

const AssignmentDetailsCard = ({ assignmentDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl w-full rounded-3xl bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 shadow-lg shadow-cyan-700/40 hover:shadow-cyan-500/70 hover:scale-[1.03] transition-transform duration-300 cursor-pointer sm:px-8 px-4 py-6"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-2xl shadow-md shadow-cyan-800/30 mb-6">
        <img
          src={assignmentDetails?.thumbnailUrl}
          alt={assignmentDetails?.title}
          className="w-full h-[400px] max-sm:h-64 object-cover transform transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl max-sm:text-xl font-semibold mb-4 tracking-tight text-cyan-400 drop-shadow-[0_0_5px_rgba(22,211,232,0.7)]">
        {assignmentDetails?.title}
      </h1>

      {/* Description */}
      <p className="text-lg max-sm:text-sm mb-6 leading-relaxed font-sans tracking-wide text-gray-300">
        {assignmentDetails?.description}
      </p>

      {/* Info Section */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="badge bg-cyan-900 text-cyan-400 px-5 py-3 font-semibold shadow-md shadow-cyan-700/40 cursor-default select-none">
          Marks: <span className="ml-2">{assignmentDetails?.marks}</span>
        </div>

        <div
          className={`badge px-5 py-3 font-semibold shadow-md cursor-default select-none ${difficultyColors[assignmentDetails?.difficulty]} shadow-[0_0_8px_rgba(255,255,255,0.1)]`}
          title={`Difficulty: ${assignmentDetails?.difficulty}`}
        >
          Difficulty:{" "}
          <span className="capitalize ml-2">
            {assignmentDetails?.difficulty}
          </span>
        </div>

        <div className="badge bg-purple-900 text-purple-400 px-5 py-2 font-semibold shadow-md shadow-purple-700/40 cursor-default select-none h-fit">
          Due Date:{" "}
          <span className="ml-2">
            {new Date(assignmentDetails?.dueDate).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </span>
        </div>

        <div className="badge bg-indigo-900 text-indigo-400 px-5 py-3 font-semibold shadow-md shadow-indigo-700/40 cursor-default select-none truncate max-w-xs">
          Creator:{" "}
          <span className="ml-2">{assignmentDetails?.creatorEmail}</span>
        </div>
      </div>

      <div className="flex justify-center mt-7 mb-4">
        <Link
          to={`/assignment/submit/${assignmentDetails?._id}`}
          className="btn btn-outline btn-info rounded-full px-10 py-3 tracking-wide transition hover:bg-cyan-600 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-500/60"
        >
          Take Assignment
        </Link>
      </div>
    </motion.div>
  );
};

export default AssignmentDetailsCard;
