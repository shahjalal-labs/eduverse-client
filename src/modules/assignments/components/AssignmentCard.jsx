/* import { useMutation } from "@tanstack/react-query";
import customAlert from "../../../utils/customAlert";
import useAuth from "../../../hooks/useAuth";
import { motion } from "motion/react";
import { deleteData } from "../../../utils/deleteData";
import { leftToRight } from "../../../animation/motion";
import AssignmentCardBody from "./AssignmentCardBody";
const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
  // console.log(assignment, "AssignmentCard.jsx", 10);
  const { user } = useAuth();
  const { mutate: deleteAssignment, isPending } = useMutation({
    mutationFn: ({ endpoint, body }) => deleteData(endpoint, body),
    mutationKey: ["deleteAssignment", "deleteSingleassignment"],
    onSuccess: (data) => {
      console.log("success", data);
      setAssignments(assignments.filter((item) => item._id !== assignment._id));
      customAlert({
        text: "Assignment deleted successfully",
        timer: 2000,
        showConfirmButton: true,
      });
    },
    onError: (err) => {
      const { response } = err;
      const errMessage = response?.data?.message;

      customAlert({
        title: "Error Occured",
        text: errMessage,
        icon: "error",
        timer: 2000,
      });
    },
  });

  const handleDeleteAssignment = async () => {
    alert("Are you sure to delete this assignment?");
    await deleteAssignment({
      endpoint: `assignments/delete-assignment/${assignment._id}`,
      body: { email: user?.email },
    });
  };
  return (
    <motion.div
      key={assignment._id}
      className="card bg-base-100 shadow-xl hover-effect hover:scale-97 scale-95"
      {...leftToRight}
    >
      <figure>
        <img
          src={assignment?.thumbnailUrl}
          alt="Thumbnail"
          className="w-full h-52 object-cover"
        />
      </figure>
      <AssignmentCardBody
        assignment={assignment}
        handleDeleteAssignment={handleDeleteAssignment}
        isPending={isPending}
      />
    </motion.div>
  );
};

export default AssignmentCard; */

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import customAlert from "../../../utils/customAlert";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";
import { deleteData } from "../../../utils/deleteData";
import { leftToRight } from "../../../animation/motion";
import AssignmentCardBody from "./AssignmentCardBody";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
  const { user } = useAuth();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { mutate: deleteAssignment, isLoading } = useMutation({
    mutationFn: ({ endpoint, body }) => deleteData(endpoint, body),
    mutationKey: ["deleteAssignment", "deleteSingleassignment"],
    onSuccess: () => {
      setAssignments(assignments.filter((item) => item._id !== assignment._id));
      customAlert({
        text: "Assignment deleted successfully",
        timer: 2000,
        showConfirmButton: true,
        icon: "success",
      });
      setConfirmDelete(false);
    },
    onError: (err) => {
      const errMessage = err?.response?.data?.message || "Unknown error";
      customAlert({
        title: "Error Occurred",
        text: errMessage,
        icon: "error",
        timer: 2500,
      });
      setConfirmDelete(false);
    },
  });

  const handleDeleteClick = () => {
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    deleteAssignment({
      endpoint: `assignments/delete-assignment/${assignment._id}`,
      body: { email: user?.email },
    });
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  return (
    <>
      <motion.div
        key={assignment._id}
        className="card bg-[#0c0f19] border border-green-800 rounded-2xl shadow-md shadow-green-900/50 hover:shadow-[0_0_20px_6px_rgba(34,197,94,0.5)] cursor-pointer scale-[0.97] hover:scale-100 transition-transform duration-300"
        {...leftToRight}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 18px 8px rgba(34, 197, 94, 0.6)",
          transition: { duration: 0.4, ease: "easeOut" },
        }}
      >
        <figure>
          <img
            src={assignment?.thumbnailUrl}
            alt="Thumbnail"
            className="w-full h-52 object-cover rounded-t-2xl"
          />
        </figure>

        <AssignmentCardBody
          assignment={assignment}
          handleDeleteAssignment={handleDeleteClick}
          isPending={isLoading}
          glowAccent // you can handle glow styling inside AssignmentCardBody if needed
        />
      </motion.div>

      {/* Confirm Delete Modal */}
      {confirmDelete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0b0f19] border border-green-700 rounded-xl p-8 max-w-sm w-full text-center shadow-lg shadow-green-900/70"
          >
            <h3 className="text-green-400 font-mono text-xl mb-4">
              Confirm Delete
            </h3>
            <p className="text-green-300 mb-6 font-mono">
              Are you sure you want to delete <br />
              <strong className="text-green-500">{assignment.title}</strong>?
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleCancelDelete}
                className="px-6 py-2 rounded-md border border-green-600 text-green-400 hover:bg-green-900 hover:text-green-300 transition"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-6 py-2 rounded-md bg-green-600 text-black font-semibold hover:bg-green-400 transition"
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AssignmentCard;
