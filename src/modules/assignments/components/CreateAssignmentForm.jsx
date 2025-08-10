/* import DatePicker from "react-datepicker";

const CreateAssignmentForm = (props) => {
  const {
    handleSubmit,
    register,
    errors,
    onSubmit,
    startDate,
    setStartDate,
    isPending,
    error,
    isError,
  } = props;

  const axiosErrorMessage = error?.response?.data;
  let errorForUi;
  if (axiosErrorMessage?.errorFrom) {
    errorForUi = axiosErrorMessage?.errors[0];
  }
  console.log(`errorForUi, errorForUi`, errorForUi);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl shadow-sm sm:p-8 p-3 space-y-1 animate-fade-in-up "
    >
      <div>
        <label className="block sm:text-lg  font-semibold text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter assignment title"
          className="input input-bordered w-full"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Description
        </label>
        <textarea
          placeholder="Enter assignment description"
          className="textarea textarea-bordered w-full"
          rows={4}
          {...register("description", {
            required: "Description is required",
          })}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block sm:text-lg font-semibold text-gray-700 mb-2">
            Marks
          </label>
          <input
            type="number"
            placeholder="Enter total marks"
            className="input input-bordered w-full"
            {...register("marks", { required: "Marks are required" })}
          />
          {errors.marks && (
            <p className="text-red-500 text-sm mt-1">{errors.marks.message}</p>
          )}
        </div>

        <div>
          <label className="block sm:text-lg font-semibold text-gray-700 mb-2">
            Thumbnail Image URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            {...register("thumbnailUrl", {
              required: "Thumbnail URL is required",
            })}
          />
          {errors.thumbnail && (
            <p className="text-red-500 text-sm mt-1">
              {errors.thumbnail.message}
            </p>
          )}
        </div>

        <div>
          <label className="block sm:text-lg font-semibold text-gray-700 mb-2">
            Difficulty Level
          </label>
          <select
            className="select select-bordered w-full"
            {...register("difficulty", {
              required: "Select difficulty level",
            })}
          >
            <option value="" disabled>
              Select difficulty
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.difficulty && (
            <p className="text-red-500 text-sm mt-1">
              {errors.difficulty.message}
            </p>
          )}
        </div>

        <div>
          <label className="block sm:text-lg font-semibold text-gray-700 mb-2">
            Due Date
          </label>
          <DatePicker
            onChange={(date) => setStartDate(date)}
            selected={startDate}
            className="input input-bordered w-full"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="btn btn-primary mt-3 btn-outline rounded-full  mx-auto"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Create Assignment"}
        </button>
      </div>
      {errorForUi && <p className="text-red-500 ">{errorForUi}</p>}
      {isError && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </form>
  );
};

export default CreateAssignmentForm; */

import DatePicker from "react-datepicker";

const CreateAssignmentForm = (props) => {
  const {
    handleSubmit,
    register,
    errors,
    onSubmit,
    startDate,
    setStartDate,
    isPending,
    error,
    isError,
  } = props;

  const axiosErrorMessage = error?.response?.data;
  let errorForUi;
  if (axiosErrorMessage?.errorFrom) {
    errorForUi = axiosErrorMessage?.errors[0];
  }
  console.log(`errorForUi, errorForUi`, errorForUi);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl shadow-lg sm:p-10 p-5 space-y-4 bg-gradient-to-br from-[#0a0c21]/90 via-[#121539]/80 to-[#090a17]/95 backdrop-blur-md animate-fade-in-up"
    >
      <div>
        <label className="block sm:text-lg font-semibold text-cyan-400 mb-2">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter assignment title"
          className="input input-bordered w-full bg-[#12172f] border-cyan-600 text-cyan-300 placeholder-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 rounded-lg"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-pink-500 text-sm mt-1 font-mono">
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-lg font-semibold text-cyan-400 mb-2">
          Description
        </label>
        <textarea
          placeholder="Enter assignment description"
          className="textarea textarea-bordered w-full bg-[#12172f] border-cyan-600 text-cyan-300 placeholder-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 rounded-lg transition-all duration-300"
          rows={4}
          {...register("description", {
            required: "Description is required",
          })}
        ></textarea>
        {errors.description && (
          <p className="text-pink-500 text-sm mt-1 font-mono">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block sm:text-lg font-semibold text-cyan-400 mb-2">
            Marks
          </label>
          <input
            type="number"
            placeholder="Enter total marks"
            className="input input-bordered w-full bg-[#12172f] border-cyan-600 text-cyan-300 placeholder-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 rounded-lg transition-all duration-300"
            {...register("marks", { required: "Marks are required" })}
          />
          {errors.marks && (
            <p className="text-pink-500 text-sm mt-1 font-mono">
              {errors.marks.message}
            </p>
          )}
        </div>

        <div>
          <label className="block sm:text-lg font-semibold text-cyan-400 mb-2">
            Thumbnail Image URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full bg-[#12172f] border-cyan-600 text-cyan-300 placeholder-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 rounded-lg transition-all duration-300"
            {...register("thumbnailUrl", {
              required: "Thumbnail URL is required",
            })}
          />
          {errors.thumbnail && (
            <p className="text-pink-500 text-sm mt-1 font-mono">
              {errors.thumbnail.message}
            </p>
          )}
        </div>

        <div>
          <label className="block sm:text-lg font-semibold text-cyan-400 mb-2">
            Difficulty Level
          </label>
          <select
            className="select select-bordered w-full bg-[#12172f] border-cyan-600 text-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 rounded-lg transition-all duration-300"
            {...register("difficulty", {
              required: "Select difficulty level",
            })}
          >
            <option value="" disabled className="text-cyan-500">
              Select difficulty
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.difficulty && (
            <p className="text-pink-500 text-sm mt-1 font-mono">
              {errors.difficulty.message}
            </p>
          )}
        </div>

        <div>
          <label className="block sm:text-lg font-semibold text-cyan-400 mb-2">
            Due Date
          </label>
          <DatePicker
            onChange={(date) => setStartDate(date)}
            selected={startDate}
            className="input input-bordered w-full bg-[#12172f] border-cyan-600 text-cyan-300 placeholder-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 rounded-lg transition-all duration-300"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="btn btn-outline btn-primary mt-4 rounded-full mx-auto border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#121426] transition-all duration-300 shadow-[0_0_15px_#22d3ee]"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Create Assignment"}
        </button>
      </div>

      {errorForUi && (
        <p className="text-pink-500 font-mono text-center mt-3">{errorForUi}</p>
      )}
      {isError && (
        <p className="text-pink-500 text-sm mt-1 font-mono">{error.message}</p>
      )}
    </form>
  );
};

export default CreateAssignmentForm;
