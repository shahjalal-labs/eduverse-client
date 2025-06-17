import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import customAlert from "../../../utils/customAlert";
import postData from "../../../utils/postData";
import { useNavigate } from "react-router";
import { bottomToTop } from "../../../animation/motion";
import { motion } from "motion/react";
import CreateAssignmentForm from "../components/CreateAssignmentForm";
import UseHelmet from "../../../hooks/useHelmet";
import LottieAnimation from "../../../animation/LottieAnimation";
import { createLottie, handLottie } from "../../../animation";

const CreateAssignment = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    mutate: createAssignment,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      customAlert({
        title: "Assignment Created!",
      });
      setTimeout(() => {
        navigate("/assignments");
      }, 3000);
    },
  });
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (data) => {
    const assignment = {
      ...data,
      dueDate: startDate,
      creatorEmail: user?.email,
    };

    // reset();
    setStartDate();
    createAssignment({
      endpoint: "assignments/create-assignment",
      body: assignment,
    });
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto sm:px-6 px-2 py-13 font-sans"
      {...bottomToTop}
    >
      <UseHelmet title="Create Assignment" />
      <div className="w-xs mx-auto w-fit mt-[-95px] ">
        <LottieAnimation anime={createLottie} />
      </div>
      <div className=" flex-center mt-[-18px] mb-2 ">
        <div className="w-[200px] max-sm:w-[100px] borde mt-[-40px] mr-[-18px] max-sm:r-[-10px]">
          <LottieAnimation anime={handLottie} />
        </div>
        <div>
          <h1 className="sm:text-3xl text-center md:text-4xl text-lg font-bold text-purple-400 mb-2 animate-fade-in mt-[-30px]">
            Create a New Assignment ✍️
          </h1>
          <p className="md:text-lg text-sm text-gray-400 animate-fade-in delay-100">
            Fill out the form below to share a new learning challenge with your
            peers.
          </p>
        </div>
      </div>

      <CreateAssignmentForm
        onSubmit={onSubmit}
        isPending={isPending}
        error={error}
        isError={isError}
        startDate={startDate}
        setStartDate={setStartDate}
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
      />
    </motion.div>
  );
};

export default CreateAssignment;
