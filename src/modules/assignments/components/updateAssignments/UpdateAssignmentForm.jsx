import DatePicker from "react-datepicker";
import customAlert from "../../../../utils/customAlert";
import { useEffect } from "react";

const UpdateAssignmentForm = (props) => {
  const {
    handleSubmit,
    register,
    errors,
    onSubmit,
    isPendingForUpdate,
    isErrorForUpdate,
    errorForUpdate,
    selectedDate,
    setSelectedDate,
  } = props;

  useEffect(() => {
    if (isErrorForUpdate) {
      customAlert({
        text: `${errorForUpdate?.message || "something went wrong"}`,
        icon: "error",
        title: "Oops! Error occurred!",
      });
    }
  }, [isErrorForUpdate, errorForUpdate]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`hover-effect max-w-[500px] mx-auto rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in-up ${
        isErrorForUpdate && "hidden"
      }`}
    >
      {/* Title */}
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-1">
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

      {/* Description */}
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-1">
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
        {/* Marks */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
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

        {/* Thumbnail URL */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
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
          {errors.thumbnailUrl && (
            <p className="text-red-500 text-sm mt-1">
              {errors.thumbnailUrl.message}
            </p>
          )}
        </div>

        {/* Difficulty */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
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

        {/* Due Date */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Due Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="input input-bordered w-full"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            showIcon={true}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="btn btn-primary rounded-full btn-outline mt-6 mx-auto"
          disabled={isPendingForUpdate}
        >
          {isPendingForUpdate ? "Submitting..." : "Update Assignment"}
        </button>
      </div>
    </form>
  );
};

export default UpdateAssignmentForm;
