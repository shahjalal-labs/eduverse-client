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
import CreateIntroAnimate from "../components/CreateIntroAnimate";
import LottieAnimation from "../../../animation/LottieAnimation";
import { createLottie2 } from "../../../animation";

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
      className=" mx-auto sm:px-6 px-2 py-13 font-sans  shadow-sm"
      {...bottomToTop}
    >
      <CreateIntroAnimate />

      <div className="lg:flex justify-center gap-7 *:max-w-[500px] *:mx-auto">
        <div className="flex-1">
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
        </div>

        <div className="relative max-w-[750px] mx-auto max-lg:mt-10 flex-1 rounded-xl p-4">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#121629] to-[#1a1f4d] -z-10" />
          <LottieAnimation anime={createLottie2} />
        </div>
      </div>
    </motion.div>
  );
};

export default CreateAssignment;
