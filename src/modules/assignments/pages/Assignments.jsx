import { motion } from "motion/react";
import ErrorMessage from "../../../utils/ErrorMessage";
import Spinner from "../../shared/Layout/Spinner";
import { useEffect, useState, useMemo } from "react";
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
  const [sortBy, setSortBy] = useState("title-asc"); // default sorting

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

  // Memoized sorted assignments
  const sortedAssignments = useMemo(() => {
    if (!assignments) return [];

    const sorted = [...assignments];

    switch (sortBy) {
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "difficulty-asc":
        sorted.sort((a, b) => a.difficulty.localeCompare(b.difficulty));
        break;
      case "difficulty-desc":
        sorted.sort((a, b) => b.difficulty.localeCompare(a.difficulty));
        break;
      case "dueDate-asc":
        sorted.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        break;
      case "dueDate-desc":
        sorted.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
        break;
      default:
        break;
    }
    return sorted;
  }, [assignments, sortBy]);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <UseHelmet title="Assignments" />
      <AssignmentsPageIntro />

      {/* Filter & Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <FilterSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          refetch={refetch}
        />

        {/* Sorting dropdown */}
        <div>
          <label
            htmlFor="sort-select"
            className="mr-2 font-medium text-gray-700"
          >
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="difficulty-asc">Difficulty (Low to High)</option>
            <option value="difficulty-desc">Difficulty (High to Low)</option>
            <option value="dueDate-asc">Due Date (Earliest)</option>
            <option value="dueDate-desc">Due Date (Latest)</option>
          </select>
        </div>
      </div>

      {/* Status */}
      {isError && <ErrorMessage error={error} />}
      {isPending && <Spinner />}

      {/* Assignments Grid */}
      {isSuccess && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {sortedAssignments.length > 0 ? (
            sortedAssignments.map((assignment) => (
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
