import { useForm } from "react-hook-form";
import UseHelemt from "../../../hooks/useHelmet";
import EvaluateSumissionForm from "../components/evaluateSubmission/EvaluateSumissionForm";
import useAuth from "../../../hooks/useAuth";
import updateData from "../../../utils/updateData";
import { useLoaderData, useNavigate, useParams } from "react-router";
import EvaluateSubmissionText from "../components/evaluateSubmission/EvaluateSubmissionText";
import customAlert from "../../../utils/customAlert";
import { useState } from "react";
import LottieAnimation from "../../../animation/LottieAnimation";
import { evaluateLottie } from "../../../animation";
import EvaluateSubmissionPageIntro from "../components/evaluateSubmission/EvaluateSubmissionPageIntro";

const EvaluateSubmissionPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const submissionData = useLoaderData();

  const { user } = useAuth();

  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const evaluatedData = {
      ...data,
      evaluatedBy: user?.email,
      // evaluatedBy: "fortesting@gmail.com",
    };
    // console.log(`evaluatedData`, evaluatedData);
    try {
      setError("");
      const result = await updateData({
        endpoint: `submission/evaluate/${id}`,
        body: evaluatedData,
      });
      // console.log(`result`, result);

      if (result?.success) {
        customAlert({
          title: "✅ Success",
          text: "Evaluation submitted successfully!",
        });
        // assignment/pending/
        setTimeout(() => {
          navigate(`/assignments/pending`);
        }, 2000);
      }
    } catch (err) {
      // console.error(err, "EvaluateSubmissionPage.jsx", 45);
      setError(err?.response?.data?.message);
      customAlert({
        title: "⚠️ Opps! Error occured!",
        text: err?.response?.data?.message,
        timer: 3000,
        icon: "error",
      });
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center  rounded-xl shadow-lg p-6 my-10 ">
      <UseHelemt title="Evaluate Submission" />
      <div className="w-full">
        <EvaluateSubmissionPageIntro />
        <div className="lg:flex justify-between order gap-7 ">
          <div className="max-w-2xl mx-auto ">
            <EvaluateSubmissionText submissionData={submissionData} />
            {/* form */}
            {/* handleSubmit, register, errors, onSubmit */}
            <EvaluateSumissionForm
              onSubmit={handleSubmit(onSubmit)}
              register={register}
              errors={errors}
            />
          </div>
          <div className="max-w-2xl mx-auto max-lg:mt-5 ">
            <LottieAnimation anime={evaluateLottie} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluateSubmissionPage;
