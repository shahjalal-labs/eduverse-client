import { motion } from "motion/react";
import ErrorMessage from "../../../utils/ErrorMessage";
import Spinner from "../../shared/Layout/Spinner";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/fetchData";
import AssignmentCard from "../components/AssignmentCard";
import AssignmentsPageIntro from "../components/AssignmentsPageIntro";
import UseHelmet from "../../../hooks/useHelmet";
import FilterSearch from "../components/FilterSearch";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const {
    data: myPostedJobs,
    isPending,
    isError,
    error,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["assignments", { difficulty, searchTerm }],
    queryFn: () =>
      fetchData(
        `/assignments?${difficulty ? `difficulty=${difficulty}&` : ""}${
          searchTerm ? `search=${searchTerm}` : ""
        }`,
      ),
  });

  useEffect(() => {
    if (isSuccess) {
      setAssignments(myPostedJobs?.data || []);
    }
  }, [myPostedJobs, isSuccess]);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <UseHelmet title="Assignments" />
      <AssignmentsPageIntro />
      {/* Filter & Search Controls */}
      <FilterSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        refetch={refetch}
      />
      {/* Status */}
      {isError && <ErrorMessage error={error} />}
      {isPending && <Spinner />}

      {/* Assignments Grid */}
      {isSuccess && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {assignments.length > 0 ? (
            assignments.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
                assignments={assignments}
                setAssignments={setAssignments}
              />
            ))
          ) : (
            <p className="text-gray-500">No assignments available.</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Assignments;
