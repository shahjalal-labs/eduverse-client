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
      className={`max-w-[500px] mx-auto rounded-3xl p-8 space-y-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-[0_0_20px_rgba(0,255,255,0.2)] animate-fade-in-up ${
        isErrorForUpdate && "hidden"
      }`}
    >
      {/* Title */}
      <div>
        <label className="block text-lg font-semibold text-cyan-400 mb-2 tracking-wide glow-text">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter assignment title"
          className="input input-bordered w-full bg-gray-900 text-cyan-300 border-cyan-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 placeholder-cyan-600"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-lg font-semibold text-cyan-400 mb-2 tracking-wide glow-text">
          Description
        </label>
        <textarea
          placeholder="Enter assignment description"
          className="textarea textarea-bordered w-full bg-gray-900 text-cyan-300 border-cyan-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 placeholder-cyan-600"
          rows={4}
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Marks */}
        <div>
          <label className="block text-lg font-semibold text-cyan-400 mb-2 tracking-wide glow-text">
            Marks
          </label>
          <input
            type="number"
            placeholder="Enter total marks"
            className="input input-bordered w-full bg-gray-900 text-cyan-300 border-cyan-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 placeholder-cyan-600"
            {...register("marks", { required: "Marks are required" })}
          />
          {errors.marks && (
            <p className="text-red-500 text-sm mt-1">{errors.marks.message}</p>
          )}
        </div>

        {/* Thumbnail URL */}
        <div>
          <label className="block text-lg font-semibold text-cyan-400 mb-2 tracking-wide glow-text">
            Thumbnail Image URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full bg-gray-900 text-cyan-300 border-cyan-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 placeholder-cyan-600"
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
          <label className="block text-lg font-semibold text-cyan-400 mb-2 tracking-wide glow-text">
            Difficulty Level
          </label>
          <select
            className="select select-bordered w-full bg-gray-900 text-cyan-300 border-cyan-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500"
            {...register("difficulty", { required: "Select difficulty level" })}
          >
            <option value="" disabled className="text-cyan-600">
              Select difficulty
            </option>
            <option value="easy" className="bg-gray-900">
              Easy
            </option>
            <option value="medium" className="bg-gray-900">
              Medium
            </option>
            <option value="hard" className="bg-gray-900">
              Hard
            </option>
          </select>
          {errors.difficulty && (
            <p className="text-red-500 text-sm mt-1">
              {errors.difficulty.message}
            </p>
          )}
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-lg font-semibold text-cyan-400 mb-2 tracking-wide glow-text">
            Due Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="input input-bordered w-full bg-gray-900 text-cyan-300 border-cyan-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 placeholder-cyan-600"
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
          disabled={isPendingForUpdate}
          className="btn btn-outline btn-primary rounded-full px-12 py-3 tracking-wide glow-pulse transition duration-300 ease-in-out hover:scale-[1.05] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPendingForUpdate ? "Submitting..." : "Update Assignment"}
        </button>
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow:
            0 0 5px #22d3ee,
            0 0 10px #22d3ee,
            0 0 20px #0f766e,
            0 0 30px #0f766e;
        }
        .glow-pulse {
          box-shadow:
            0 0 10px #22d3ee,
            0 0 20px #0f766e,
            0 0 40px #14b8a6;
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow:
              0 0 10px #22d3ee,
              0 0 20px #0f766e,
              0 0 40px #14b8a6;
          }
          50% {
            box-shadow:
              0 0 15px #22d3ee,
              0 0 30px #0f766e,
              0 0 50px #14b8a6;
          }
        }
        /* Fade in up animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </form>
  );
};

export default UpdateAssignmentForm;
