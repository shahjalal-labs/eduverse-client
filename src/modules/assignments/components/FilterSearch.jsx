const FilterSearch = ({
  searchTerm,
  setSearchTerm,
  difficulty,
  setDifficulty,
  refetch,
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full sm:max-w-xs"
        />
        <div className="flex-center gap-1  w-full sm:max-w-xs">
          <select
            className="select select-bordered w-full sm:max-w-xs flex-1"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className="btn btn-primary" onClick={refetch}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
