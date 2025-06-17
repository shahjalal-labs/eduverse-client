import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../../../utils/ErrorMessage";
import { motion } from "motion/react";
import {
  FaBook,
  FaCheckCircle,
  FaHourglassHalf,
  FaCalendarAlt,
  FaCommentDots,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { fetchData } from "../../../utils/fetchData";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import UseHelmet from "../../../hooks/useHelmet";

const MySubmittedAssignmentPage = () => {
  const { user } = useAuth();
  const email = user?.email;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["submitted-assignments", email],
    queryFn: () => fetchData(`/submission/my-submissions?email=${email}`),
    enabled: !!email,
  });

  const submitted = data?.data;

  if (isLoading)
    return <div className="text-center mt-20 text-lg">Loading...</div>;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <UseHelmet title="My Submitted Assignments" />
      <h1 className="sm:text-3xl text-xl font-bold mb-9 text-center">
        📘 My Submitted Assignments
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {submitted?.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            You haven’t submitted any assignments yet.
          </p>
        ) : (
          submitted?.map((item, idx) => {
            const {
              _id,
              notes,
              googleDocLink,
              status,
              obtainedMarks,
              feedback,
              createdAt,
              studentEmail: examinee,
              evaluatedBy: examiner,
              // assignmentId,
            } = item;

            const assignmentId = item?.assignmentId;

            return (
              <motion.div
                key={_id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className=" shadow-xl hover:shadow-2xl rounded-2xl p-6 transition-all duration-300 hover-effect"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaBook className="text-blue-500 text-xl" />
                  <h2 className="text-lg font-semibold">
                    {assignmentId?.title || "No title provided"}
                  </h2>
                </div>

                <p className="text-sm  mb-1">
                  <span className="font-medium ">Notes:</span>{" "}
                  {notes || "No notes provided"}
                </p>

                <p className="text-sm  mb-1">
                  <span className="font-medium ">Examinee:</span>{" "}
                  {examinee || "No examinee provided"}
                </p>

                <p className="text-sm  mb-1">
                  <span className="font-medium ">Google Doc:</span>{" "}
                  <Link
                    to={googleDocLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Submission
                  </Link>
                </p>

                <p className="text-sm  mb-1">
                  <span className="font-medium 0">Total Marks:</span>{" "}
                  {assignmentId?.marks ?? "N/A"}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm font-medium">
                  {status === "pending" ? (
                    <>
                      <FaHourglassHalf className="text-yellow-500" />
                      <span className="text-yellow-600">Pending Review</span>
                    </>
                  ) : (
                    <>
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-green-600">
                        Marked ✅ — {obtainedMarks} marks
                      </span>
                    </>
                  )}
                </div>

                {feedback && (
                  <p className="mt-2 flex items-center text-sm text-gray-700">
                    <FaCommentDots className="mr-2 text-indigo-500" />
                    <span className="italic">Feedback: {feedback}</span>
                  </p>
                )}
                {examiner && (
                  <p className="mt-2 flex items-center text-sm text-gray-700">
                    <FaChalkboardTeacher className="mr-2 text-indigo-500" />
                    <span className="italic">Examinner: {examiner}</span>
                  </p>
                )}
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="mr-2" />
                  Submitted on:{" "}
                  {new Date(createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MySubmittedAssignmentPage;
