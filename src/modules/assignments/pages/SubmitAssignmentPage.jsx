import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import postData from "../../../utils/postData";
import useAuth from "../../../hooks/useAuth";
import customAlert from "../../../utils/customAlert";
import UseHelmet from "../../../hooks/useHelmet";
import Lottie from "lottie-react";
import submitAnimation from "../../../animation/submit.json"; // ⬅️ Add your Lottie file

const SubmitAssignmentPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await postData({
        endpoint: "submission/submit-assignment",
        body: {
          assignmentId: id,
          googleDocLink: data.googleDocLink,
          notes: data.notes,
          studentEmail: user?.email,
        },
      });

      customAlert({
        title: "Assignment submitted successfully!",
      });

      setTimeout(() => {
        navigate("/assignment/my-submit");
      }, 2500);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <UseHelmet title="Submit Assignment" />

      <div className="w-full max-w-2xl  backdrop-blur-md shadow-xl rounded-3xl p-8 relative border border-indigo-200">
        {/* Animated header */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="w-32 h-32 mb-4">
            <Lottie animationData={submitAnimation} loop autoplay />
          </div>
          <h2 className="sm:text-3xl text-xl font-bold text-indigo-400">
            Submit Assignment
          </h2>
          <p className="text-sm text-gray-600">
            Please share your Google Docs and any notes
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="label">
              <span className="text-base text-gray-400">Google Docs Link</span>
            </label>
            <input
              {...register("googleDocLink", { required: true })}
              type="url"
              minLength={10}
              className="placeholder:text-gray-400 input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="https://docs.google.com/..."
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base text-gray-400">Notes </span>
            </label>
            <textarea
              {...register("notes")}
              required
              minLength={10}
              className="placeholder:text-gray-400 textarea textarea-bordered w-full min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="What should we know about your submission?"
            />
          </div>

          <button className="btn rounded-full bg-indigo-600 hover:bg-indigo-700 text-white w-full shadow-md transition duration-200">
            Submit Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitAssignmentPage;

/* import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import postData from "../../../utils/postData";
import useAuth from "../../../hooks/useAuth";
import customAlert from "../../../utils/customAlert";
import UseHelmet from "../../../hooks/useHelmet";

const SubmitAssignmentPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams(); // assignmentId from route
  console.log(id, "SubmitAssignmentPage.jsx", 12);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      let res = await postData({
        endpoint: "submission/submit-assignment",
        body: {
          assignmentId: id,
          googleDocLink: data.googleDocLink,
          notes: data.notes,
          studentEmail: user?.email,
        },
      });
      customAlert({
        title: "Assignment submitted successfully!",
      });
      // reset();
      setTimeout(() => {
        navigate("/assignment/my-submit");
      }, 2500);
      console.log(res, "repsonse");
    } catch (err) {
      console.log(`err`, err);
      toast.error(err?.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <UseHelmet title="Submit Assignment" />
      <div className="my-10  justify-center max-w-xl mx-auto p-6 rounded shadow ">
        <h2 className="text-2xl font-semibold mb-4">Submit Assignment</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("googleDocLink", { required: true })}
            className="input input-bordered w-full"
            placeholder="Google Docs Link"
            required
            type="url"
            minLength={10}
          />
          <textarea
            {...register("notes")}
            className="textarea textarea-bordered w-full"
            placeholder="Notes"
            required
            minLength={10}
          />
          <button className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitAssignmentPage; */
